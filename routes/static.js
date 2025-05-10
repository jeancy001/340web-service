const express = require("express");
const path = require("path"); // You need this for correct path handling
const router = express.Router();

router.use(express.static('public')); // This line is optional if you use the others

router.use('/images', express.static(path.join(__dirname, 'public', 'images')));
router.use('/css', express.static(path.join(__dirname, 'public', 'css')));
router.use('/js', express.static(path.join(__dirname, 'public', 'js')));

module.exports = router;
