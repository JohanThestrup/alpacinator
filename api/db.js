const pgp = require("pg-promise")();
const db = pgp(
    `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`
);

module.exports = { db, pgp };
