/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const db = require('../lib/dbConnect.js');

function createUser(req, res, next) { // makes a new user upon signup page
  const userObject = {
    username: req.body.username,

    // Store hashed password
    password: req.body.password,
  };

  db.none(`INSERT INTO users (username, password)
          VALUES ($/username/, $/password/);`, userObject)
    .then(next())
    .catch(err => next(err));
}

function listUsers(req, res, next) {
  db.any('SELECT * from users;')
    .then((users) => {
      res.users = users;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

// function getUserById(id) {
//   return (db) => {

//     const promise = new Promise((resolve, reject) => {


//       db.collection('users')
//         .findOne({ _id: ObjectID(id) }, (findError, user) => {
//           if (findError) reject(findError);
//           db.close();
//           resolve(user);
//         });
//     });


//     return promise;
//   };
// }

// function getUserByUsername(username) {
//   return {const promise = new Promise((resolve, reject) => {
//       db.one('SELECT * FROM users WHERE username = $1', [username])
//       .then ((findError, user) => {
//         if (findError) reject(findError);
//         resolve(user);
//       });
//     });
//     return promise;
//   )}
// }

function getUserByUsername(username) {
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
}


module.exports = {
  createUser,
  listUsers,
  // getUserById,
  getUserByUsername,
};
