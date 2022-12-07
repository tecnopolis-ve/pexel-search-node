const express = require("express");
const server = express();
const apiRoutes = require("./routes/api");

server.use("/api/V1", apiRoutes);

module.exports = server;