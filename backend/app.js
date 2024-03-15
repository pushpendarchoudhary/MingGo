const express = require("express");
const errorMiddleware = require("./Middleware/error")
const app = express();
app.use(express.json());

// Route Imports 

const Users = require("./Routes/UserRoutes");
const Tracks = require("./Routes/trackRoutes");
app.use("/api/v1", Tracks);
app.use("/api/v1", Users);
app.use(errorMiddleware);
module.exports = app;