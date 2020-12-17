const express = require('express');
const controller = require("../controllers/index");
const router = express.Router();

/* GET HOME page. */
router.get('/', controller.index);

/* GET PROFILE page. */
router.get('/profile', controller.profile);


module.exports = router;
