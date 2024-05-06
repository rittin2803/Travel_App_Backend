const express = require('express');
const router = express.Router();

// const hotels = require("../data/hotels");

const Hotel = require("../model/hotel.model");

router.route("/")    // When called from server.js the url will be updated accordingly.
    .get(async (req, res)=>{
        // res.json(hotels.data);

        try {
            const hotels = await Hotel.find({});
            hotels ? res.json(hotels) : res.status(404).json({message: "No Data Found"});
        } catch (error) {
            console.log(error);
        }
    })

module.exports = router;