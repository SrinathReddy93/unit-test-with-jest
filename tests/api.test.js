const app = require('../server');
const request = require("supertest"); 

describe("Test methods", () => {

    // afterAll(() => {
    //     console.log("afterAll called");
    //     done();
    // });
    it("test string", async() => {
        await request(app)
        .get("/")
        .expect(200)
        .then((response) => {
            expect(response.body.message).toBe("Hello Jest.");
        });
        // done();
    });
});

describe("Test api", () => {

    it("test string", async() => {
        await request(app)
        .get("/api/welcome")
        .expect(200)
        .then((response) => {
            expect(response.body.message).toBe("Welcome");
        });
        // done();
    });
});