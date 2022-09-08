const express = require("express");
const helmet = require('helmet')
const authRouter = require('./routers/authRouter');
const app = express();
const session = require("express-session");
require('dotenv').config();
const cors = require("cors");

app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
app.use(express.json());
app.use(session({
  secret: process.env.COOKIE_SECRET, 
  credentials: true,
  name: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
    httpOnly: true,
    sameSite: process.env.ENVIRONMENT === 'prduction' ? "none" : "lax"
  }
}))

app.use('/auth', authRouter)