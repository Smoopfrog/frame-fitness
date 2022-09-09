const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post('/exercises', (req, res) => {
    console.log('req.body', req.body)
    const userId = req.body.userId;
    const exerciseId = req.body.exerciseId;
    
    db.query(`INSERT INTO workouts (user_id, exerciseId) VALUES ($1, $2)`, [userId, exerciseId]);

    res.send(req.body)
  })
  
  router.get('/exercises', (req, res) =>{
    console.log('req', req.query.userId)
    const userId = req.query.userId
    
    db.query(`SELECT * FROM workouts WHERE user_id = $1`, [userId])
      .then(data => {
        console.log(data.rows)
        const workout = data.rows;
        res.json({ workout });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })
  return router;
};
 