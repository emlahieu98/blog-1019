
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
}).single('image')
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
    //const categories = await categoryModel.find();
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
exports.p_addPost= async(req, res) => {
  try {
    const { title, image, imageContent, content, tags } = req.body;
    console.log(req.body);
    upload(req, res,  function (err) {
      if (err instanceof multer.MulterError) {
        res.json("Lỗi định dạng, vui lòng xem lại ảnh");
      } else if (err) {
        res.json("Lỗi server quá tải , vui lòng đợi 1 lát");
      }
    const file = req.file;
      const newPost = new postModel({
        title:title,
        content:content,
        tags:[],
      image: file.filename,
    });
    console.log(newPost);
     }) 
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
