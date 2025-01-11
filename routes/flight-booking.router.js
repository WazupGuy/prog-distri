// const express = require("express");
// const Amadeus = require("amadeus");
// const FlightBooked = require("../models/FlightBooked");
// const router = express.Router();

// const amadeus = new Amadeus({
// 	clientId: ' v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
// 	clientSecret: 'kWkEhWrLSPu4qcGu',
//   });

//  router.post('/', async (req, res) => {
//     try { 

//     const flight = req.body.flight; 
//     const name = req.body.name;
//     let emailAddress = req.body.emailAddress;

//     const response = await amadeus.booking.flightOrders.post(JSON.stringify({
//         'data': {
//                 'type': 'flight-order',
//                 'flightOffers': [flight],
//                 'travelers': [{
//                     "id": "1",
//                     "dateOfBirth": "2000-08-13",
//                     "name": {
//                         "firstName": name.first,
//                         "lastName": name.last                    
//                     },
//                     "gender": "MALE",
//                     "contact": {
//                         "emailAddress": emailAddress,
//                         "phones": [{
//                             "deviceType": "MOBILE",
//                             "countryCallingCode": "33",
//                             "number": "480080076"
//                         }]
//                     },
//                 }]
//             }
//         }));

//         // Affichage de la réponse de l'API Amadeus
//         res.status(200).json(response.result);

//         // Enregistrement des données dans MongoDB
//         // const bookingData = response.result.data;
//         // const flightBooked = new FlightBooked({
//         //     segments: bookingData.flightOffers[0].itineraries[0].segments,
//         //     price: {
//         //         total: bookingData.flightOffers[0].price.total,
//         //         base: bookingData.flightOffers[0].price.base,
//         //     },
//         //     client: {
//         //         name: bookingData.travelers[0].name,
//         //         emailAddress: bookingData.travelers[0].contact.emailAddress
//         //     }
//         // });

//         const savedFlightBooked = await flightBooked.save();

//         console.log("Flight successfully booked and saved");
//     } catch (error) {
//         console.error("Error booking flight:", error);
//         res.status(500).json({ error: "An error occurred while booking flight." });
//     }
// });

// module.exports = router;


