const pool = require ('./pool.js');

module.exports = {
  insertEmail (email) {
    return new Promise ((resolve, reject) => {
      const queryStatement = 'INSERT INTO emailAddress (email) VALUES ($1);';
      const queryArgument = [email];
      pool.query(queryStatement, queryArgument, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      })
    })
  }
}