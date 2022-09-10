const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  database: "frame",
  host: "localhost",
  user: "jeandre",
  password: "postgres",
  port: 5432
});

module.exports = pool;