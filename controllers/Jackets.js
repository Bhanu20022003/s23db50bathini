var Jackets = require('../models/Jackets');
// List of all Jacketss
exports.jackets_list = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets list');
};
// for a specific Jackets.
exports.jackets_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets detail: ' + req.params.id);
};
// Handle Jackets create on POST.
exports.jackets_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets create POST');
};
// Handle Jackets delete form on DELETE.
exports.jackets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets delete DELETE ' + req.params.id);
};
// Handle Jackets update form on PUT.
exports.jackets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets update PUT' + req.params.id);
};
//List of all Costumes
exports.jackets_list = async function(req, res) {
try{
theJackets = await Jackets.find();
res.send(theJackets);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
