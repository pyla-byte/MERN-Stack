require('dotenv').config();
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwkey } = require('../../library/constants')
class LoginController {

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(401).json({ message: 'Invalid password' });
                }     
                const token = jwt.sign(
                    {
                        userId: user._id,
                        iat: Math.floor(Date.now() / 1000),
                        exp: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60)
                    }, process.env.JWT_SECRET        
                );
                return res.json({ token });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new LoginController();