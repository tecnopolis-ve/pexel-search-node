const searchService = require("../services/search");

async function doSearch(req, res, next) {
    try {
        const search = await searchService.search(req.query);
        res.status(search.status).json(search.data);
    } catch (error) {
        console.log(error.message)
        next(error);
    }
}

module.exports = {
    doSearch,
};
