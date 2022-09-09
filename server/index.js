const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const db = require('./db/db.js');
const userRoutes = require('./routers/authRouter.js')
require('dotenv').config();
db.connect();

app.use(
  cors()
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', userRoutes(db))

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

