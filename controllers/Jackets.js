var Jackets = require('../models/Jackets');
// List of all Jacketss
exports.jackets_list = function(req, res) {
res.send('NOT IMPLEMENTED: Jackets list');
};
// for a specific Jackets.
exports.jackets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await jackets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// VIEWS
// Handle a show all view
exports.Jackets_view_all_Page = async function(req, res) {
    try{
    theJackets = await Jackets.find();
    res.render('Jackets', { title: 'Jackets Search Results', results: theJackets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.jackets_create_post = async function(req, res) {
        console.log(req.body)
        let document = new Jackets();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"costume_type":"goat", "cost":12, "size":"large"}
        document.Jackets = req.body.Jackets;
        document.cost = req.body.cost;
        document.brand = req.body.brand;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
        
    
    
