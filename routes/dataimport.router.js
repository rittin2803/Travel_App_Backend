const express = require('express');

const Hotel = require("./../model/hotel.model");
const hotels = require("./../data/hotels");

const router = express.Router();

// Adding data to DATABASE - Schema - Blueprint
router.route("/")
    .post(async (req, res) =>{
        try {
            await Hotel.deleteMany({});
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB);
        } catch (error) {
            console.log(error);
            res.json({message: "Could not add data to DB"});
        }
    })


module.exports = router;