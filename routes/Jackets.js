var express = require('express');
const Jackets_controlers= require('../controllers/Jackets');
var router = express.Router();
/* GET costumes */
router.get('/', Jackets_controlers.Jackets_view_all_Page );
module.exports = router;
