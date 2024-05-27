const express = require('express');
const mongoose = require('mongoose');

const hotelDataAddedToRouter = require('./routes/dataimport.router');
const categoryDataAddedToRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishListRouter = require("./routes/wishlist.router");

const connectDB = require("./config/dbconfig")
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
connectDB();

app.get("/", (req,res)=>{
    res.send("Hello");
})

// Adding data to database
app.use("/api/v1/hoteldata", hotelDataAddedToRouter);
app.use("/api/v1/categorydata", categoryDataAddedToRouter);
app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/hotels", singleHotelRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/wishlist", wishListRouter);

mongoose.connection.once("open", ()=>{
    console.log("Connected to Database");
    app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT}`);
    });
});