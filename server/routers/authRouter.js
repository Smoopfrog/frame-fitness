const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post('/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(`INSERT INTO users (username, passhash) VALUES ($1, $2)`, [username, password]);

    res.send(req.body)
  })
  
  router.get('/users', (req, res) =>{
    db.query(`SELECT * FROM users`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })
  return router;
};
