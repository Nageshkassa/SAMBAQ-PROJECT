
const express = require("express");
const dotenv=require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/db");
dotenv.config();
const authRoute = require("./routes/authroute");


const app = express();
// DB Connection
db(app);
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", authRoute);

module.exports = app;



