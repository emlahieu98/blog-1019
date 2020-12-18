require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const { checkAdmin } = require("./src/middlewares/checkAdmin");
const { checkLogin } = require("./src/middlewares/checkLogin");

const indexRouter = require('./src/routes/index');
const adminRouter = require("./src/routes/admin");
const authRouter = require("./src/routes/auth");

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'src/', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", require("./src/routes"))
app.use('/', indexRouter);
app.use("/auth", authRouter);

//app.use("/admin", checkLogin, checkAdmin, adminRouter);
app.use("/admin", adminRouter)
app.use("*", (req, res) => {
  return res.render("404NotFound")
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});
//init mongo
require("./config/mongo")

module.exports = app;
