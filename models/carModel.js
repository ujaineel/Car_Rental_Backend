const mongoose = require("mongoose");

const schema = mongoose.Schema;

const carSchema = new schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    // Sedan, Coupe, Hatchback, SUV, Minivan, Truck
    type: {type: String, required: true},
    // Gas, Hybrid, Electric
    fuelType: {type: String, required: true},
    bookedTimeSlots: [{
        from: {type: String, required: true},
        to: {type: String, required: true}
    }],
    // US Dollars
    rentPerHour: {type: Number, required: true}
}, {timestamps: true});

const carModel = mongoose.model('cars', carSchema);
module.exports = carModel;