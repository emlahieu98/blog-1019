const categoryModel = require("./../models/categoryModel")
exports.index = async (req, res) => {
  try {
   res.json('HOME PAGE')
  } catch (error) {
    res.json('Loi catch')
  }
};

exports.admin = async (req, res) => {
  try {
   res.render('admin/dashboard')
  } catch (error) {
    res.json('Loi catch')
  }
};

exports.adminBlog = async (req, res) => {
  try {
   res.render('admin/blog/index')
  } catch (error) {
    res.json('Loi catch')
  }
};

exports.addBlog = async (req, res) => {
  try {
  // res.render('admin/blog/add')
  const categories = await categoryModel.find();
  
  } catch (error) {
    res.json('Loi catch')
  }
};