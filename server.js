const express = require('express');

const hotelRouter = require("./routes/hotel.router");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.use("/api/v1/hotels", hotelRouter);

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});