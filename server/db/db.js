const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  database: "frame",
  host: "localhost",
  user: "postgres",
  password: "password123$",
  port: 5432
});

module.exports = pool;