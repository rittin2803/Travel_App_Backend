const Hotel = require("../model/hotel.model");

const singleHotelHandler = async (req, res) =>{
    try {
        const { id } = req.params; // For retrieving an ID for an hotel
        const hotel = await Hotel.findById(id);
        res.json(hotel);
    } catch (error) {
        res.status(404).json({ message : "Cannot find hotel"});
    }
}

module.exports = singleHotelHandler;