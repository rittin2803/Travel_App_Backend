const Hotel = require("../model/hotel.model");

const getAllHotelHandler = async (req, res)=>{
    // res.json(hotels.data);

    const hotelCategory = req.query.category
    // Query - http://localhost:3000/api/hotels?category=National+Park

    try {
        // Retrieving one hotel from DB - const hotels = await Hotel.find({})

        let hotels
        if(hotelCategory){
            hotels = await Hotel.find({category: hotelCategory})
        }else{
            hotels = await Hotel.find({});
        }
        
        hotels ? res.json(hotels) : res.status(404).json({message: "No Data Found"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllHotelHandler;