const express = require("express");
const router = express.Router();
// // const bcrypt = require('bcrypt');
// // const validateSignup = require('../controllers/validateSignup');
// // const validateLogin = require('../controllers/validateLogin');


module.exports = (db) => {
  router.post('/users', (req, res) => {
    // console.log('res', res)
    console.log('username', req.body.username)
    console.log('password', req.body.password)
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(`INSERT INTO users (username, passhash) VALUES ($1, $2)`, [username, password]);

    res.send(req.body)
  })
  
  return router;
};

// // Signup validation
// module.exports = () => {
//   router.post('/users', (req, res) => {
//     console.log('res', res.body)
//     console.log('req', req.body)
//     res.send('hello')
//     // db.query()
//     // validateSignup(req, res);
//     // res.json({word:"hello"})
//     // await pool.query(
//     //       "INSERT INTO users (username, passhash) VALUES ($1, $2) RETURNING id, username",
//     //       [req.body.username, hashedPassword]);
//     // const existingUser = await pool.query("SELECT username from users WHERE username=$1", [req.body.username])

//     // console.log(existingUser)

//     // if(existingUser.rowCount === 0) {
//     //   // signup user
//     //   const hashedPassword = await bcrypt.hash(req.body.password, 20)
//     //   const queryNewUser = await pool.query(
//     //     "INSERT INTO users (username, passhash) VALUES ($1, $2) RETURNING id, username",
//     //     [req.body.username, hashedPassword]);
//     //   req.session.user = {
//     //     username: req.body.username,
//     //     id: queryNewUser.rows[0].id
//     //   };
//       // res.json({loggedIn: true, username: req.body.username})
//     // } else {
//     //   res.json({loggedIn: false, status: "Username already in use"})
//     // }
//   });

//   // router.get('/signup', async (req, res) => {
//   //   console.log('req', req)
//   //   console.log('res', res)
//   // })

//   return router;
// };

// // Login validation
// // router.post('/login', async (req, res) => {
// //   validateLogin(req, res);

// //   const loginInfo = await pool.query("SELECT id, username, passhash FROM users WHERE users.username=$1 AND users.passhash=$2", [req.body.username]);

// //   if (loginInfo.rowCount > 0) {
// //     const samePassword = await bcrypt.compare(req.body.password, loginInfo.rows[0].passhash);
    
// //     if(samePassword) {
// //         req.session.user = {
// //           username: req.body.username,
// //           id: loginInfo.rows[0].id
// //         }
// //         res.json({loggedIn: true, username: req.body.username})
// //     } else {
// //         res.json({loggedIn: false, status: "Wrong username or password"})
// //     }
// //   } else {
// //       res.json({loggedIn: false, status: "Wrong username or password"})
// //   }
// // });

// // module.exports = router;