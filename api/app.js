require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./db");
const port = 3000;
const { create_table, get_alpacas, add_alpaca } = require("./queries");

try {
    db.none(create_table);
} catch (error) {
    console.error(error);
}

app.use(cors());
app.use(express.json());

app.get("/api/getalpacas", async (req, res) => {
    try {
        const alpacas = await db.manyOrNone(get_alpacas);
        res.send(alpacas);
    } catch (error) {
        console.error(error);
    }
});

app.post("/api/addalpaca", async (req, res) => {
    try {
        const alpacas = await db.one(add_alpaca, req.body);
        res.send(alpacas);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Api listening on PORT: ${port}`);
});
