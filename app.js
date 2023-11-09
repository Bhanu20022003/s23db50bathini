var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var JacketsRouter = require('./routes/Jackets');
var BoardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Jackets = require("./models/Jackets");
var resourceRouter = require('./routes/resource');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/resource',resourceRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Jackets', JacketsRouter);
app.use('/board', BoardRouter);
app.use('/choose', chooseRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

async function recreateDB(){
  // Delete everything
  await Jackets.deleteMany();
  let instance1 = new  Jackets({jackets:"zipjacket",  cost:30,brand:"Aeropostal"});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance2 = new Jackets({jackets:"sweatjacket",  cost:50,brand:"nike"});
  instance2.save().then(doc=>{
  console.log("second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance3 = new Jackets({jackets:"longjacket",  cost:40,brand:"puma"});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}
  

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
