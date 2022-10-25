const model = require ('./model.js');

module.exports = {
  insertEmail(req, res) {
    let email = req.body.email;
    model.insertEmail(email)
      .then ((results) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.send(500);
      })
  },

  getEmail (req, res) {
    let email = req.query.email;
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
  }

}