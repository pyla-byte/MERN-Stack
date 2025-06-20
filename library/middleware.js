const auth = async (req, res, next) => {
    try {
        if ('authorization' in req.headers) {
            const token = req.headers.authorization.pop(' ')[1];
            if (token) {
                const jwt = require('jsonwebtoken');
                const jkey = require('../library/constants.js');
                jwt.verify(token, jkey, (error, decoded) => {
                    if (error) {
                        next({
                            message: "Invalid token",
                            status: 401
                        });
                    } else {
                        req.user = decoded;
                        next();
                    }
                });
            } else {
                next({
                    message: "Token not provided",
                    status: 401
                });
            }
        } else { }
    }
    catch (error) {
        next({
            message: "Auth token verification failed",
            status: 500,
            error: error.message
        });
    }
}
const adminOnly = (req, res, next) => {
    if (req.user.role === 'Admin') {
        next();
    } else {
        next({
            message: "Access denied",
            status: 403
        });
    }
}

module.exports = { auth, adminOnly };