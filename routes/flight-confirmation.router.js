// const express = require("express");
// const Amadeus = require("amadeus");
// const router = express.Router();

// const amadeus = new Amadeus({
// 	clientId: ' v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
// 	clientSecret: 'kWkEhWrLSPu4qcGu',
//   });


//   router.post('/', (req, res) => {

//     const flight = req.body.flight
    
//     // Confirm availability and price
//     amadeus.shopping.flightOffers.pricing.post(
//         JSON.stringify({
//             'data': {
//                 'type': 'flight-offers-pricing',
//                 'flightOffers': [flight],
//             }
//         })
//     ).then(function (response) {
//             res.send(response.result);
//         }).catch(function (response) {
//             res.send(response)
//         })
    
// })

// module.exports = router;