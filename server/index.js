const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const db = require('./db/db.js');
const userRoutes = require('./routers/authRouter.js')
require('dotenv').config();
// const router = express.Router();
// const helmet = require('helmet')
// const authRouter = require('./routers/authRouter');
// const session = require("express-session");

app.use(
  cors()
);

app.use('/', userRoutes())

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

  // app.use(helmet());
// app.post()
// app.use(express.json());
// app.use(session({
//   secret: process.env.COOKIE_SECRET, 
//   credentials: true,
//   name: 'sessionId',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
//     httpOnly: true,
//     sameSite: process.env.ENVIRONMENT === 'prduction' ? "none" : "lax"
//   }
// }))
