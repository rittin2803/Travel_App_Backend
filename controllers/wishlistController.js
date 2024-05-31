const Wishlist = require("../model/wishlist.model");

const createWishlistHandler = async (req, res) =>{
    try {
        const newWishlist = new Wishlist(req.body);

        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (error) {
        res.status(500).json({ message: "Failed to create wishList" });
    }
}

const deleteWishlistHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted from wishlist" });
    } catch (error) {
        res.status(500).json({ message: "Cannot find in Wishlist" });
    }
}

const getWishlistHandler = async (req, res) =>{
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.status(200).json({ message: "No items found" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };