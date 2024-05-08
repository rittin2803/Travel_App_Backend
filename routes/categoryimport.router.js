const express = require('express');

const Category = require("./../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

// Adding data to DATABASE - Schema - Blueprint
router.route("/")
    .post(async (req, res) =>{
        try {
            await Category.deleteMany({});
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB);
        } catch (error) {
            console.log(error);
            res.json({message: "Could not add Categories to DB"});
        }
    })


module.exports = router;