const { User } = require('./../../models/User.model');
module.exports = {  
    async findUserByEmail(email) {
        const user = await User.findOne({ email });
        return user;
    }
}