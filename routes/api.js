const express = require("express");
const search = require('../controllers/search');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Alive!");
});

router.get("/search", search.doSearch);

module.exports = router;