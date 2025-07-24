const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const errormiddleware = require("./middlewares/Error");
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use("/", express.static("uploads"));
//routes

//middlewares
app.use(errormiddleware);

//exports
module.exports = app;
