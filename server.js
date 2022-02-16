require('dotenv').config()
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");
const mongoose = require('mongoose');


const port = 5000 || process.env.port;


app.use(bodyParser.json());
app.use(cors());

app.use("/api/cars", carRoutes);
app.get("/", (req, res) => res.send('Hello World!'));

mongoose
    .connect(`mongodb+srv://${process.USER}:${process.PASS}@${process.CLUSTER}.mongodb.net/${process.DBNAME}`, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => app.listen(port, () => console.log(`Node JS Server Started in ${port}`)))
    .catch(err => console.log(err));