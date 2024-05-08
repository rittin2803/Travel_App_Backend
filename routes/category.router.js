const express = require('express');
const router = express.Router();

const Category = require("./../model/category.model");

router.route("/")
    .get(async (req, res) =>{
        try {
            const categories = await Category.find({});
            res.json(categories);
        } catch (error) {
            res.status(202).json({message: "Could not find categories."})
        }
    })

module.exports = router;