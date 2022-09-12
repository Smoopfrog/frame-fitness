const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.post('/exercises', async (req, res) => {
    const userId = req.body.userId;
    const exerciseId = req.body.exercise.id
    const equipment = req.body.exercise.equipment
    const exerciseName = req.body.exercise.name
    const target = req.body.exercise.target
    const gifUrl = req.body.exercise.gifUrl
    const bodyPart = req.body.exercise.bodyPart

    await db.query(`INSERT INTO workouts (user_id, exerciseId, bodyPart, equipment, exerciseName, gifUrl, targetGroup) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [userId, exerciseId, bodyPart, equipment, exerciseName, gifUrl, target]);

    await db.query(`SELECT * FROM workouts WHERE user_id = $1 ORDER BY exerciseid ASC;`, [userId])
      .then(data => {
        const workout = data.rows;
        res.send({ workout });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  router.put('/exercises', async (req, res) => {
    const userId = req.body.userId;
    const exerciseId = req.body.exerciseId;
    const totalSets = req.body.totalSets;
    const totalReps = req.body.totalReps;
    
    if (totalSets) {
      await db.query(`UPDATE workouts SET totalsets = $1 WHERE user_id = $2 AND exerciseid = $3;`, [totalSets, userId, exerciseId])
    }

    if (totalReps) {
      await db.query(`UPDATE workouts SET totalreps = $1 WHERE user_id = $2 AND exerciseid = $3;`, [totalReps, userId, exerciseId])
    }


    await db.query(`SELECT * FROM workouts WHERE user_id = $1 ORDER BY exerciseid ASC;`, [userId])
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

  router.get('/exercises', async (req, res) => {
    const userId = req.query.userId

    await db.query(`SELECT * FROM workouts WHERE user_id = $1 ORDER BY exerciseid ASC;`, [userId])
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
    if (exerciseId) {
      await db.query(`DELETE FROM workouts WHERE user_id = $1 AND exerciseid = $2;`, [userId, exerciseId])
    } else {
      await db.query(`DELETE FROM workouts WHERE user_id = $1;`, [userId])
    }

    await db.query(`SELECT * FROM workouts WHERE user_id = $1 ORDER BY exerciseid ASC;`, [userId])
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
