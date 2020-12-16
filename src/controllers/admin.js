
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
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // limit file max 5MB
//   },
// }).array('files')
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
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};
exports.p_addPost= async (req, res) => {
  try {
     upload(req, res, async function (err) {
       console.log(req.file)
      if (err instanceof multer.MulterError) {
        res.json("Lỗi định dạng, vui lòng xem lại ảnh");
      } else if (err) {
        res.json("Lỗi server quá tải , vui lòng đợi 1 lát");
      }
    const newPost = new postModel({
      image: req.file.filename,
    //  newPost.imageContent = file;
    //  console.log(newPost)
     })
    console.log('newPost', newPost)
    newPost.save()
    });
  } catch (error) {
    console.log(error.message)
    // return res.status(400).json({
    //   status: "fail",
    //  message: transValidation.input_incorrect,
    // });
  }
};
