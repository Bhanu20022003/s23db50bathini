var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Jackets', { title: 'Search Results Jackets' });
});



module.exports = router;