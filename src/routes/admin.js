const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

/* GET ADMIN page. */
router.get("/", adminController.admin);

/* posts services. */
router.get("/posts", adminController.post);
router
  .route("/post/add")
  .get(adminController.addPost)
  .post(adminController.p_addPost);

module.exports = router;
