const { Exception } = require('./../core/Exception/base-exception');
const UserSericve = require('./../core/services/UserService');

module.exports = {
    finUserByEmail: async (req, res, next) => {
        const { email } = req.query;
        if (!email) {
            throw new Exception(`Email is required`, 400, 'sewr3343Q')
        }

        const user = await UserSericve.findUserByEmail(email);
        if (user) {
            
            res.json({ email: user.email });
        } else {
            res.json(null);
        }
    }
}