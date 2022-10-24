const model = require ('./model.js');

module.exports = {
  insertEmail(req, res) {
    let email = req.body.email;
    console.log (email, 'email in controller')
    model.insertEmail(email)
      .then ((results) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.send(500);
      })
  }

}