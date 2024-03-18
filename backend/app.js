const express = require("express");
const errorMiddleware = require("./Middleware/error")
const app = express();
const cookieParser = require("cookie-parser")
app.use(express.json());
app.use(cookieParser());

// Route Imports 

const Users = require("./Routes/UserRoutes");
const Tracks = require("./Routes/trackRoutes");
app.use("/api/v1", Tracks);
app.use("/api/v1", Users);
app.use(errorMiddleware);
module.exports = app;