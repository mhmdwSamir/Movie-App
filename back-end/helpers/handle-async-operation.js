const handleException = require("../core/Exception/exception.handler");

module.exports = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (exc) {
      console.log(exc);
      handleException(exc, res);
    }
  };
};
