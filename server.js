const express = require("express");
const config = require("./config/config");
const server = express();
const apiRoutes = require("./routes/api");

server.use("/api/V1", apiRoutes);

server.listen(config.port, () => {
    console.log("Listening");
});
