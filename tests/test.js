const supertest = require("supertest");
const server = require("../index");

const api = supertest(server);

describe("Api endpoint", () => {
    beforeEach(() => jest.clearAllMocks());

    it("[KO] perform a search without query param", async () => {
        const res = await api.get("/api/V1/search").send();
        expect(res.statusCode).toEqual(400);
    });

    it("[OK] perform a search with query param", async () => {
        const res = await api.get("/api/V1/search?query=cat").send();
        expect(res.statusCode).toEqual(200);
        expect(res.body.page).toEqual(1);
        expect(res.body.per_page).toEqual(30);
        expect(Array.isArray(res.body.photos)).toBeTruthy()
        expect(res.body.photos.length).toBeGreaterThan(0)

    });
});
