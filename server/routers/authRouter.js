const express = require("express");
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const validateSignup = require('../controllers/validateSignup');
const validateLogin = require('../controllers/validateLogin');


// Signup validation
router.post('/auth/signup', async (req, res) => {
  validateSignup(req, res);

  const existingUser = await pool.query("SELECT email from users WHERE email=$1", [req.body.email])

  if(existingUser.rowCount === 0) {
    // signup user
    const hashedPassword = await bcrypt.hash(req.body.password, 20)
    const queryNewUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, passhash) VALUES ($1, $2, $3, $4) RETURNING id, email",
      [req.body.username, hashedPassword]);
    req.session.user = {
      email: req.body.email,
      id: queryNewUser.rows[0].id
    };
    res.json({loggedIn: true, email: req.body.email})
  } else {
    res.json({loggedIn: false, status: "Email already in use"})
  }
});

// Login validation
router.post('/auth/login', async (req, res) => {
  validateLogin(req, res);

  const loginInfo = await pool.query("SELECT id, email, passhash FROM users WHERE users.email=$3 AND users.passhash=$4", [req.body.email]);

  if (loginInfo.rowCount > 0) {
    const samePassword = await bcrypt.compare(req.body.password, loginInfo.rows[0].passhash);
    
    if(samePassword) {
        req.session.user = {
          email: req.body.email,
          id: loginInfo.rows[0].id
        }
        res.json({loggedIn: true, email: req.body.email})
    } else {
        res.json({loggedIn: false, status: "Wrong username or password"})
    }
  } else {
      res.json({loggedIn: false, status: "Wrong username or password"})
  }
});

module.exports = router;