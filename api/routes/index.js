const express = require("express");
const { db } = require("../db");
const { get_alpacas, add_alpaca } = require("../sql/queries");

const router = express.Router();

router.get("/api/getalpacas", async (req, res) => {
    try {
        const alpacas = await db.manyOrNone(get_alpacas);
        res.status(200).send(alpacas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/api/addalpaca", async (req, res) => {
    try {
        const alpacas = await db.one(add_alpaca, req.body);
        res.status(201).send(alpacas);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
