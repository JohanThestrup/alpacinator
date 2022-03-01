const pgp = require("pg-promise")();
const connectionString =
    process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL
        : `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;

const db = pgp(connectionString);

module.exports = { db, pgp };
