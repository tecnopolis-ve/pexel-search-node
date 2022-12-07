const fetch = require("node-fetch-commonjs");
const config = require("../config/config");

async function search(payload) {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${config.apiToken}`,
            },
        };

        const { query, page = 1, per_page = 30 } = payload || {};

        if (!query) {
            throw new Error("query is required");
        }

        const response = await fetch(
            `${config.apiUrl}?query=${query}&page=${page}&per_page=${per_page}`,
            options
        );
        const data = await response.json();

        console.log(data);
        return {
            status: 200,
            data,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 400,
            data: {
                message: error.message,
            },
        };
    }
}

module.exports = {
    search,
};
