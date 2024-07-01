const express = require('express');
const router = express.Router();

//Estrutura /

// Home Page
router.get('//', function (req, res) {
 // res.send('Home page');
 res.render("admin/login/index.ejs");
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;