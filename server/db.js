const { Pool, Client } = require("pg");
const path = require("path");
require("dotenv").config({
  override: true,
  path: path.join(__dirname, ".env"),
});

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
});

module.exports = pool;
