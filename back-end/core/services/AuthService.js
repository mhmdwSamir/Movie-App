const jwt = require('jsonwebtoken');
const { APP_SECRET_KEY } = require('./../../config/APP_SECRET_KEY');

module.exports = {

    /**
     * Generates token based some user properties
     */
    generateToken(id, username, displayName, email, options = { }) {
        const payload = { id, username, displayName, email };

        const token = jwt.sign(payload, APP_SECRET_KEY, options);

        return token;
    }
}