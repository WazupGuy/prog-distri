const express = require("express");
const Amadeus = require("amadeus");
const router = express.Router();

const amadeus = new Amadeus({
	clientId: ' v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
	clientSecret: 'kWkEhWrLSPu4qcGu',
  });

  router.get(`/`, (req, res) => {

    

    const originCode = req.query.originCode;
    const destinationCode = req.query.destinationCode;
    const dateOfDeparture = req.query.dateOfDeparture
    const maxPrice = req.query.maxPrice;
    // Find the cheapest flights
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: originCode,  // iata code de l'aeroport/ville de depart
        destinationLocationCode: destinationCode,
        departureDate: dateOfDeparture,   // Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2018-12-25
        maxPrice: maxPrice, // maximum price per traveler
        adults: '1',
        max: '7'
    }).then(function (response) {
        res.send(response.result);
    }).catch(function (response) {
        res.send(response);
    });
    });

module.exports = router;
