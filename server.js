const server = require('./index');
const config = require("./config/config");

server.listen(config.port, () => {
    console.log("Listening");
});