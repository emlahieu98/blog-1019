const express = require('express');
const controller = require("../controllers/index");
const router = express.Router();

/* GET HOME page. */
router.get('/', controller.index);

/* GET ADMIN page. */
router.get('/admin', controller.admin);

/* GET ADMIN page. */
router.get('/admin/blog', controller.adminBlog);

/* GET ADMIN page. */
router.route("/admin/blog/add")
    .get(controller.addBlog)


module.exports = router;
