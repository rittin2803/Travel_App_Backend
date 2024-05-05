const express = require('express');
const router = express.Router();

const hotels = require("../data/hotels");

router.route("/")    // When called from server.js the url will be updated accordingly.
    .get((req, res)=>{
        res.json(hotels.data);
    })

module.exports = router;