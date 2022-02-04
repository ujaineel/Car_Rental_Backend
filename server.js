const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000 || process.env.port;
const dbConnection = require('./db');

app.use("/api/cars", carRoutes);
app.get("/", (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Node JS Server Started in ${port}`));