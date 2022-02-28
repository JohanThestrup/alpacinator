const { pgp } = require("./db");
const { join: joinPath } = require("path");

function sql(file) {
    const fullPath = joinPath(__dirname, file);
    return new pgp.QueryFile(fullPath, { minify: true });
}

const create_table = sql("./sql/create_table.sql");
const get_alpacas = sql("./sql/get_alpacas.sql");
const add_alpaca = sql("./sql/add_alpaca.sql");

module.exports = { create_table, get_alpacas, add_alpaca };
