require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./db");
const router = require("./routes");
const { create_table } = require("./sql/queries");

(function createDb() {
    try {
        db.none(create_table);
    } catch (error) {
        console.error(error);
    }
})();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
