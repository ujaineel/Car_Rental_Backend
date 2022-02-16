const router = require("express").Router();
const Car = require("../models/carModel");

router.get("/", async (req, res) => {
    try{
        const cars = await Car.find();
        console.log(cars);
        res.send(cars);
    } catch (e){
        return res.status(400).json(e);
    }
});

module.exports = router;