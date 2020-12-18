const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN ;
const accountModel = require("../models/accountModel");
exports.checkLogin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const decodeToken = jwt.verify(token,SECRET_TOKEN);
        //check decode token with id User
        const user = await accountModel.findOne({
            _id: decodeToken._id
        })
            req.user = user
            next();
    } catch (error) {
        return res.send("404 Not found");
    }
}