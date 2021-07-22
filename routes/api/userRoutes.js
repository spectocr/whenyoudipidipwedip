const bcrypt = require('bcrypt');
const router = require('express').Router();

const saltRounds = 10;

// router.post('/login', (req, res) => {
// // Load hash from your password DB.
// //pull db password from db via username, then pass to the hash var below.
// bcrypt.compare(req.body.password, hash, function(err, result) {
//     // result == true
// });
// })

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

