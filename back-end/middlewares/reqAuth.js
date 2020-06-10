const jwt = require("jsonwebtoken");
const Unauthorized = require("./../core/Exception/Unauthorized");
const { APP_SECRET_KEY } = require("./../config/APP_SECRET_KEY");
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).send(new Unauthorized(" You are Unauthorized "));
  try {
    // verfication
    const currentUser = jwt.verify(token, APP_SECRET_KEY);

    req.currentUser = currentUser;
    next();
  } catch (exe) {
    console.log(exe);
    res.status(401).send(new Unauthorized(" You are Unauthorized "));
  }
};
