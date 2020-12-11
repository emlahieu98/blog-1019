const express = require("express");
const controller = require("../controllers/post");
const router = express.Router();

/* GET POST page. */
router.get("/", controller.index);

module.exports = router;
