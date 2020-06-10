const { Exception } = require("./base-exception");

module.exports = class Unauthorized extends Exception {
  constructor(msg, codeExp) {
    super(msg, 401, codeExp);
  }
};
