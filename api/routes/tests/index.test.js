const app = require("../../app");
const { db } = require("../../db");
const request = require("supertest");

describe("Alpaca api", () => {
    afterAll(() => {
        db.$pool.end();
    });

    describe("GET /api/getalpacas", () => {
        test("should return status code 200", async () => {
            const res = await request(app).get("/api/getalpacas");
            expect(res.statusCode).toEqual(200);
        });
    });

    describe("POST /api/addalpaca", () => {
        test("should return status code 400 if data is empty", async () => {
            const res = await request(app).post("/api/addalpaca").send({});
            expect(res.statusCode).toEqual(400);
        });

        test("should return status code 201 if data is passed correctly", async () => {
            const res = await request(app).post("/api/addalpaca").send({
                name: "Bruce",
                weight: 77,
                color: "#000000",
                farm: "alpacacenter",
                created_on: "2022-02-28T21:42:50.948Z",
            });
            expect(res.statusCode).toEqual(201);
        });
    });
});
