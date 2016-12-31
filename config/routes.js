/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const pass = require('passport'),
    authentication = require('../controllers/AuthorizationController');

module.exports = function (app) {
  app.get('/', function (req,res) {
     res.send("welcome");
  });

  //auth
   app.post('/register', authentication.registerUser);
   app.post('/login', authentication.loginUser);
};