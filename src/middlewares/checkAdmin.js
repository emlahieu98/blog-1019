const jwt = require("jsonwebtoken");
exports.checkAdmin = async (req, res, next) => {
    const role = req.user.role;
    if (role === 'admin') {
        return next();
    }
    return res.render("403ForBidden")
}