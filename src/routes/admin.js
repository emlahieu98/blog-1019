const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

/* GET ADMIN page. */
router.get("/", adminController.admin);

/* posts services. */
router.get("/posts", adminController.post);
//router.post("/upload", adminController.upload);
router
  .route("/post/add")
  .get(adminController.addPost)
  .post(adminController.p_addPost);
router
    .route("/post/edit-:id")
    .get(adminController.editPost)
//    .post(adminController.p_editPost);

module.exports = router;
