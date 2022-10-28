const pool = require ('./pool.js');

module.exports = {
  insertEmail (email, firstName, lastName) {
    return new Promise ((resolve, reject) => {
      const queryStatement = 'INSERT INTO emailAddress (email, firstname, lastname) VALUES ($1, $2, $3);';
      const queryArgument = [email, firstName, lastName];
      pool.query(queryStatement, queryArgument, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      })
    })
  },

  getEmail (email) {
    return new Promise ((resolve, reject) => {
      console.log (email, 'model')
      const queryStatement = 'SELECT * FROM emailAddress WHERE email = ($1);';
      const queryArgument = [email];
      pool.query(queryStatement, queryArgument, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
        })
      })
    },

  getUser (email) {
    return new Promise ((resolve, reject) => {
      const queryStatement = `SELECT firstname, lastname FROM emailAddress where email = ($1);`;
      const queryArgument = [email];
      pool.query (queryStatement, queryArgument, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve (results.rows[0]);
      })
    })
  },
}