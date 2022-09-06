const express = require("express");
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const validateSignup = require('../controllers/validateSignup');
const validateLogin = require('../controllers/validateLogin');


// Signup validation
router.post('/signup', async (req, res) => {
  validateSignup(req, res);

  const existingUser = await pool.query("SELECT username from users WHERE username=$1", [req.body.username])

  console.log(existingUser)

  if(existingUser.rowCount === 0) {
    // signup user
    const hashedPassword = await bcrypt.hash(req.body.password, 20)
    const queryNewUser = await pool.query(
      "INSERT INTO users (username, passhash) VALUES ($1, $2) RETURNING id, username",
      [req.body.username, hashedPassword]);
    req.session.user = {
      username: req.body.username,
      id: queryNewUser.rows[0].id
    };
    res.json({loggedIn: true, username: req.body.username})
  } else {
    res.json({loggedIn: false, status: "Username already in use"})
  }
});

// Login validation
router.post('/login', async (req, res) => {
  validateLogin(req, res);

  const loginInfo = await pool.query("SELECT id, username, passhash FROM users WHERE users.username=$1 AND users.passhash=$2", [req.body.username]);

  if (loginInfo.rowCount > 0) {
    const samePassword = await bcrypt.compare(req.body.password, loginInfo.rows[0].passhash);
    
    if(samePassword) {
        req.session.user = {
          username: req.body.username,
          id: loginInfo.rows[0].id
        }
        res.json({loggedIn: true, username: req.body.username})
    } else {
        res.json({loggedIn: false, status: "Wrong username or password"})
    }
  } else {
      res.json({loggedIn: false, status: "Wrong username or password"})
  }
});

module.exports = router;