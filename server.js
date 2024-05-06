const express = require('express');
const mongoose = require('mongoose');

const hotelRouter = require("./routes/hotel.router");
const connectDB = require("./config/dbconfig")

const app = express();

app.use(express.json());
connectDB();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.use("/api/v1/hotels", hotelRouter);

mongoose.connection.once("open", ()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT || PORT, ()=>{
        console.log(`Server is running at ${PORT}`);
    });
});