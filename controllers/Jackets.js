var Jackets = require('../models/Jackets');
// List of all Jacketss
exports.jackets_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Jackets list');
};
// for a specific Jackets.
exports.jackets_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Jackets.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Jackets delete form on DELETE.
exports.jackets_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Jackets delete DELETE ' + req.params.id);
};
// Handle Jackets update form on PUT.
// exports.jackets_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: Jackets update PUT' + req.params.id);
// };

exports.jackets_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Jackets.findById(req.params.id)
        // Do updates of properties
        if (req.body.jackets) toUpdate.jackets = req.body.jackets;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.brand) toUpdate.brand = req.body.brand;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
}


//List of all Costumes
exports.jackets_list = async function (req, res) {
    try {
        theJackets = await Jackets.find();
        res.send(theJackets);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Jackets_view_all_Page = async function (req, res) {
    try {
        theJackets = await Jackets.find();
        res.render('Jackets', { title: 'Jackets Search Results', results: theJackets });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.jackets_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Jackets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "brand":"large"}
    document.jackets = req.body.jackets;
    document.cost = req.body.cost;
    document.brand = req.body.brand;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.jackets_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Jackets.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle a show one view with id specified by query
exports.jackets_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Jackets.findById(req.query.id)
        res.render('jacketsdetail',
            { title: 'Jackets Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jackets_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jacketscreate', { title: 'Jackets Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.jackets_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Jackets.findById(req.query.id)
    res.render('jacketsupdate', { title: 'Jackets Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle a delete one view with id from query
exports.jackets_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Jackets.findById(req.query.id)
    res.render('jacketsdelete', { title: 'Jackets Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
