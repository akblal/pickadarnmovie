const model = require ('./model.js');

module.exports = {
  insertEmail(req, res) {
    let email = req.body.email;
    let firstName = req.body.firstName;
    let lastName = req. body.lastName;
    model.insertEmail(email, firstName, lastName)
      .then ((results) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.send(500);
      })
  },

  getEmail (req, res) {
    let email = req.query.email;
    console.log (email, 'controller')
    model.getEmail(email)
      .then((results) => {
        if (results.rows.length > 0) {
          res.status(200);
          res.send('email found');
        } else {
          res.status(200);
          res.send('no email found');
        }
      })
      .catch((err) => {
        res.send (err);
        res.status(500);
      })
  },

  getUser (req, res) {
    let email = req.query.email;
    console.log (email, 'in controller!')
    model.getUser(email)
      .then((results) => {
        console.log (results, 'results from query in controller! first and last name.')
        res.send(results);
        res.status (200);
      })
      .catch((err) => {
        console.log (err);
        res.status(500);
      })
  }
}