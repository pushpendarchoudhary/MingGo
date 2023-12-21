const express = require("express");

const app = express();
app.use(express.json());

// Route Imports 

const Users = require("./Routes/UserRoutes");
app.use("/api/v1", Users);
module.exports = app;