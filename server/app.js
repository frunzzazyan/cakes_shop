const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authorizationRouter = require('./routes/authorization.js');
const profileRouter = require("./routes/profile.js")
const adminRouter = require("./routes/admin.js")

const cors = require("cors")
const mongoose = require("mongoose")
const ProductsServices = require("./services/ProductsServices.js")
const AuthorizationServices = require('./services/AuthorizationServices.js');
const models = require("./models");
const ProfileServices = require('./services/ProfileServices.js');
const AdminServices = require('./services/AdminServices.js');
// const CommentsServices = require('./services/CommentsServices.js');

const app = express();

// mongoose.connect("mongodb+srv://user2000:passw0Rd@cluster0.kogrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>console.log("db ok"))
// .catch((err)=>console.log("db err"))
mongoose.connect("mongodb://localhost:27017/myDB")
.then(()=>console.log("db ok"))
.catch((err)=>console.log("db err"))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.models = {
  products : models.products,
  users : models.users
}

app.locals.services = {
  products : new ProductsServices(app.locals.models),
  authorization : new AuthorizationServices(app.locals.models),
  profile : new ProfileServices(app.locals.models),
  admin : new AdminServices(app.locals.models)
}

app.use('/', indexRouter);
app.use("/auth", authorizationRouter)
app.use("/profile", profileRouter)
app.use("/admin", adminRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
