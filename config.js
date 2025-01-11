
const https = require('https');
const fs = require('fs');
const express = require('express');

const config = {
    // mongoURI: {
    //     local: "mongodb://localhost:27017/BookingFlightsDB",
    // },
    amadeus: {
        clientId: 'v29Cd4CHgPDIA6v1J2JRuE68A2CZRX9d',
        clientSecret: 'kWkEhWrLSPu4qcGu',
    },
    https: {
        options: {
            key: fs.readFileSync('./localhost-key.pem'),
            cert: fs.readFileSync('./localhost.pem'),
        }
    },
      rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limite à 100 requêtes par fenêtre
        message: "Too many requests from this IP, please try again later",
      },
    
    
};




module.exports = config;
