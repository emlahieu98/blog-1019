const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { transValidation } = require("../../langs/errors/vn");
const accountModel = require("../models/accountModel");
const jwt = require("jsonwebtoken");
const NUMBER_SALT =  10;
const SECRET_TOKEN = process.env.SECRET_TOKEN;
const salt = bcrypt.genSaltSync(NUMBER_SALT);

exports.register = async (req, res) => {
    try {
        const {email, fullName, password} = req.body;
        const isEmailExist = await accountModel.findOne({email:email});
        if(isEmailExist){
            return res.status(400).json({
                status: "fail",
                message: transValidation.email_exist,
              });
        }
        const newAccount = new accountModel({
            email: email,
            fullName: fullName,
            password: password
        });
        const hashPassword = await bcrypt.hash(newAccount.password, salt);
        newAccount.password = hashPassword;
        await newAccount.save();
        return res.status(200).json({
            status: "success",
            message: transValidation.input_correct,
          });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: transValidation.server_incorrect,
      });
    }
     
  };

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        //check isEmailExist
        const user = await accountModel.findOne({ email: email });
        if (!user) {
          return res.status(400).json({
            status: "fail",
            message: transValidation.login_fail,
          });
        }
        //Check password
        const passLogin = await bcrypt.compare(password, user.password);        
        if (user && !passLogin) {
          return res.status(400).json({
            status: "fail",
            message: transValidation.login_fail,
          });
        }
        const token = await jwt.sign({ _id: user._id, role: user.role }, SECRET_TOKEN, { expiresIn: "24h" });
        return res.status(200).json({
            status: "success",
            message: transValidation.input_correct,
            token: token,    
            role: user.role
        });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: transValidation.server_incorrect,
      });
    }
     
  };
  
exports.logout = async (req, res) => {
    try {
        cookie = req.cookies;
        for (var prop in cookie) {
            if (!cookie.hasOwnProperty(prop)) {
                continue;
            }
            res.cookie(prop, '', { expires: new Date(0) });
        }
        res.redirect('/');
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: transValidation.server_incorrect,
      });
    }
     
  };
