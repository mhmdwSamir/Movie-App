const bcryptjs = require("bcryptjs");
const { APP_SECRET_KEY } = require("./../config/APP_SECRET_KEY");
const jwt = require("jsonwebtoken");
const { User, validator } = require("./../models/User.model");
const { Exception } = require('./../core/Exception/base-exception');
const HttpStatusCode = require('./../helpers/http-status-code');
const AuthService = require('./../core/services/AuthService');

class unAuthorized {
  constructor(msg) {
    this.msg = msg;
    this.status = 401;
  }
}

module.exports = {
  signUp: async (req, res) => {
    const signUpDto = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.displayName
    }
    for (const key in signUpDto) {
      const property = req.body[key];
      if (!property && key !== 'displayName') {
        throw new Exception(`Parameter error '${key}'`, HttpStatusCode.BadRequest, 'l5jo4ihtf');
      }
    }
    const userInDb = await User.findOne({ email: signUpDto.email });
    if (userInDb) {
      throw new Exception('User is already exist', HttpStatusCode.Conflict, 'AKkq24');
    }
    
    const hashedPassword = bcryptjs.hashSync(signUpDto.password);
    let user = await new User({
      username: signUpDto.username,
      email: signUpDto.email,
      password: hashedPassword,
      displayName: signUpDto.displayName,
    });
    user = await user.save();
    const token = AuthService.generateToken(user.id, user.username, user.displayName, user.email, { expiresIn: '2d' });

    res.status(HttpStatusCode.Created )
    .send({
      user,
      token
    });
  },
  signIn: async (req, res) => {
    try {
      // from 33 to 39 to check if the user has entered the right username and password
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new unAuthorized("Incorrect email or Password");
      }
      const passIsRight = bcryptjs.compareSync(password, user.password);
      console.log({ passIsRight})
      if (!passIsRight)
        throw new unAuthorized("Incorrect UserName or Password");

      // create an ticket (JsonWebToken)
      const token = AuthService.generateToken(user._id, user.username, user.displayName, user.email, { expiresIn: '2d'});
      res.json({ user, token });
    } catch (exe) {
      console.log(exe);
      res.status(exe.status || 500).send(exe.msg);
    }
  },
};
