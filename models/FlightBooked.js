// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Schéma pour un segment de vol
// const FlightSegmentSchema = new Schema({
//     departure: {
//         iataCode: String,
//         terminal: String,
//         at: Date
//     },
//     arrival: {
//         iataCode: String,
//         terminal: String,
//         at: Date
//     },
//     carrierCode: String,
//     number: String,
//     aircraft: {
//         code: String
//     },
//     duration: String,
//     id: String,
//     numberOfStops: Number,
//     co2Emissions: [
//         {
//             weight: Number,
//             weightUnit: String,
//             cabin: String
//         }
//     ]
// });

// // Schéma pour le prix du vol
// const PriceSchema = new Schema({
//     currency: String,
//     total: String,
//     base: String,
   
//     grandTotal: String,

// });

// // Schéma pour un client
// const ClientSchema = new Schema({
//     name: {
//         firstName: String,
//         lastName: String
//     },
//     emailAddress: String
// });


// const FlightBookedSchema = new Schema({
//     segments: [FlightSegmentSchema],
//     price: PriceSchema,
//     client: ClientSchema
// });

// const FlightBooked = mongoose.model("FlightBooked", FlightBookedSchema);

// module.exports = FlightBooked;
