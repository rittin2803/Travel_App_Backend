const express = require('express');
const router = express.Router();

// const hotels = require("../data/hotels");
const getAllHotelHandler = require("../controllers/hotelController");

router.route("/")    // When called from server.js the url will be updated accordingly.
    .get(getAllHotelHandler);

module.exports = router;