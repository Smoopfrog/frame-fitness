const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post('/exercises', (req, res) => {
    const userId = req.body.userId;
    const exerciseId = req.body.exercise.id
    const equipment = req.body.exercise.equipment
    const exerciseName = req.body.exercise.name
    const target = req.body.exercise.target
    const gifUrl = req.body.exercise.gifUrl
    const bodyPart = req.body.exercise.bodyPart

    db.query(`INSERT INTO workouts (user_id, exerciseId, bodyPart, equipment, exerciseName, gifUrl, targetGroup) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [userId, exerciseId, bodyPart, equipment, exerciseName, gifUrl, target]);

    res.send(req.body)
  })

  router.get('/exercises', (req, res) => {
    const userId = req.query.userId

    db.query(`SELECT * FROM workouts WHERE user_id = $1`, [userId])
      .then(data => {
        const workout = data.rows;
        res.json({ workout });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  router.delete('/exercises', async (req, res) => {
    const userId = req.query.userId
    const exerciseId = req.query.exerciseId

    await db.query(`DELETE FROM workouts WHERE user_id = $1 AND exerciseid = $2;`, [userId, exerciseId])

    await db.query(`SELECT * FROM workouts WHERE user_id = $1;`, [userId])
      .then(data => {
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
