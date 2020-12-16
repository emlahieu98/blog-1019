
const mongoose = require("mongoose");
const multer = require("multer");
const postModel = require("./../models/postModel");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/images/posts/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file max 5MB
  },
}).array('files')
exports.admin = async (req, res) => {
  try {
    res.render("admin/dashboard");
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
exports.post = async (req, res) => {
  try {
    res.render("admin/posts/index");
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};

exports.addPost = async (req, res) => {
  try {
    res.render("admin/posts/add");
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
exports.p_addPost= async(req, res) => {
  try {
    upload(req, res,  function (err) {
      if (err instanceof multer.MulterError) {
        res.json("Lỗi định dạng, vui lòng xem lại ảnh");
      } else if (err) {
        res.json("Lỗi server quá tải , vui lòng đợi 1 lát");
      }
      const file = req.files.map( file => file.originalname)
      const newPost = new postModel({
        title: req.body.title,
        content: req.body.content,
        tags:[],
        image: file.filename,
        imageContent: []
    });
      newPost.imageContent = file;
      console.log(newPost)
     }) 
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
