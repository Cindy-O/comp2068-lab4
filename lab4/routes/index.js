var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Javier page. */
router.get('/javier', function(req, res, next) {
  res.render('javier', { title: 'Javier' });
});

/* GET Lidia page. */
router.get('/lidia', function(req, res, next) {
  res.render('lidia', { title: 'Lidia' });
});

/* GET Cindy page. */
router.get('/cindy', function(req, res, next) {
  res.render('cindy', { title: 'Cindy' });
});

/* GET Rose page. */
router.get('/rose', function(req, res, next) {
  res.render('rose', { title: 'Rose' });
});

/* GET Magaly page. */
router.get('/magaly', function(req, res, next) {
  res.render('magaly', { title: 'Magaly' });
});

module.exports = router;
