var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/validemail', function(req, res, next) {
  res.sendStatus(200);
  res.redirect('/mainPage.html');
});

module.exports = router;
