const mongoose = require("mongoose");
const uPass = 'jaineel';
const dbName = 'RaCars';

const connectDB = () => {
    mongoose.connect(`mongodb+srv://${uPass}:${uPass}@cluster0.a2jpx.mongodb.net/${dbName}`, {useUnifiedTopology: true, useNewUrlParser: true});

    const connection = mongoose.connection;

    connection.on('connect', () => {
        console.log("Mongo DB Connection Successfull");
    });

    connection.on('error', () => {
        console.log('MongoDB Connection Error');
    });
}

connectDB();

module.exports = connectDB;