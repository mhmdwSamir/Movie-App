const bcryptjs = require("bcryptjs");
const { APP_SECRET_KEY } = require("./../config/APP_SECRET_KEY");
const jwt = require("jsonwebtoken");
const { User, validator } = require("./../models/User.model");
class unAuthorized {
  constructor(msg) {
    this.msg = msg;
    this.status = 401;
  }
}

module.exports = {
  signUp: async (req, res) => {
    const {
      username,
      email,
      password,
      confirmPassword,
      displayName,
    } = req.body;
    const hashedPassword = bcryptjs.hashSync(password);
    let user = await new User({
      username,
      email,
      password: hashedPassword,
      displayName,
    });
    user = await user.save();
    res.status(201).send(user);
  },
  signIn: async (req, res) => {
    try {
      // from 33 to 39 to check if the user has entered the right username and password
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) throw new unAuthorized("Incorrect UserName or Password");
      const passIsRight = bcryptjs.compareSync(password, user.password);
      if (!passIsRight)
        throw new unAuthorized("Incorrect UserName or Password");

      // create an ticket (JsonWebToken)
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, APP_SECRET_KEY);
      res.json({ token: token });
      console.log(currentUser);
    } catch (exe) {
      console.log(exe);
      res.status(exe.status || 500).send(exe.msg);
    }
  },
};
