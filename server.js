/* Importing Modules */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const Constants = require('./server/constants')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');


const PORT = process.env.PORT || 9000


//Routes
const AuthenticationRoute = require('./routes/index');
const UserRoute = require('./routes/User');

 
/* Initialising Express Application */
const app = express();

//Set up mongoose connection
const MongoServer = require('./config/db');

MongoServer().catch(err => {
	console.log('Error Connecting');
	return;
}) 

/* Passport configuration */
require('./config/passport')(passport);

//compression
app.use(compression())

// Express body parser
app.use(bodyParser.json());


// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Adding Passport as middleware
app.use(passport.initialize());
app.use(passport.session());


// Connect flash
app.use(flash());


/* Serve Webpack Build File */
app.use(express.static(path.join(__dirname, 'build')))


app.use('/',AuthenticationRoute);
app.use('/user',UserRoute);


app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'))
})

/* Listening to Requests */
app.listen(PORT,() => {
	console.log(`Welcome To ToDo APP`);
})