var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Jackets_controller = require('../controllers/Jackets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Jackets', Jackets_controller.jackets_create_post);
// DELETE request to delete Costume.
router.delete('/Jackets/:id', Jackets_controller.jackets_delete);
// PUT request to update Costume.
router.put('/Jackets/:id', Jackets_controller.jackets_update_put);
// GET request for one Costume.
router.get('/Jackets/:id', Jackets_controller.jackets_detail);
// GET request for list of all Costume items.
router.get('/Jackets', Jackets_controller.jackets_list);
/* GET detail costume page */
router.get('/detail', Jackets_controller.jackets_view_one_Page);

/* GET create costume page */
router.get('/create', Jackets_controller.jackets_create_Page);


module.exports = router;
// API for our resources

