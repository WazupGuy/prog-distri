
// const express = require("express");
// const Amadeus = require("amadeus");
// const router = express.Router();

// const amadeus = new Amadeus({
// 	clientId: ' v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
// 	clientSecret: 'kWkEhWrLSPu4qcGu',
//   });

// router.get("/:parameter", (req, res) => {
// 	const parameter = req.params.parameter;
	
// 	amadeus.referenceData.locations
// 		.get({
// 			keyword: parameter,
// 			subType: Amadeus.location.any,
// 		})
// 		.then(function (response) {
// 			res.send(response.result);
// 		})
// 		.catch(function (response) {
// 			res.send(response);
// 		});
// });

// module.exports = router;