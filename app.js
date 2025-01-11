var express = require("express");
var Amadeus = require("amadeus");
var bodyParser = require("body-parser");

const authenticationRouter = require('./routes/authenticate.router'); 
var passport = require("passport"); // Ajout de l'importation de Passport
require("./middleware/passport"); 
// const mongoose = require('mongoose');
const https = require('https');
const config = require('./config')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');


// Define the routes
const cityAndAirportSearchRouter = require(`./routes/city-and-airport-search.router.js`);
const flightSearchRouter = require(`./routes/flight-search.router.js`);
const flightConfirmationRouter = require(`./routes/flight-confirmation.router.js`);
const flightBookingRouter = require(`./routes/flight-booking.router.js`);


const amadeus = new Amadeus({
  clientId: ' v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
  clientSecret: 'kWkEhWrLSPu4qcGu',
});

const app = express();


// require('./models/db.js') // mongo

// // Middleware de limite de débit
// const limiter = rateLimit({
//   windowMs: config.rateLimit.windowMs,
//   max: config.rateLimit.max,
//   message: config.rateLimit.message,
// });
// app.use(limiter);


app.use(bodyParser.json());


//Pour utiliser la commande npm run start:local , décommentez les lignes suivantes 
/*
const server = https.createServer(config.https.options, app)
const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('Server is secure and running on port' +PORT);
})
*/


//helmet 
app.use(helmet())


//cors
let corsOptions = {
  origin: 'https://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH']
};
app.use(cors(corsOptions));


// Initialisation de Passport
app.use(passport.initialize());


// Routes pour l'authentification (signup et login)
// app.use('/auth', authenticationRouter);



// api amadeus 
// app.use('/city-and-airport-search', cityAndAirportSearchRouter);
app.use('/flight-search', flightSearchRouter);
// app.use(`/flight-confirmation`, flightConfirmationRouter);
// app.use(`/flight-booking`, flightBookingRouter);






// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
