/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const passport = require('passport'),
    authenticationController = require('../controllers/AuthorizationController'),
    userController = require('../controllers/UserController'),
    gameController = require('../controllers/GameController');

module.exports = function (app) {
  app.get('/', function (req,res) {
     res.send("welcome");
  });
    //test
    app.get('/api', passport.authenticate('jwt', {session: false}), function (req, res) {
        res.send('It worked ! User id is : ' + req.user);
    });
    app.get('/logout', function (req, res){

    });

  //Auth
   app.post('/authorization/register', authenticationController.registerUser);
   app.post('/authorization/login', authenticationController.loginUser);
   app.post('/authorization/logout', passport.authenticate('jwt' ,{session: false}), authenticationController.logoutUser);
   // Users
    app.get('/user/all' ,passport.authenticate('jwt',{session: false}), userController.getAllUsers);
    app.get('/user/:userid' ,passport.authenticate('jwt',{session: false}), userController.getUserById);
    app.post('/user/changepassword' , passport.authenticate('jwt',{session: false}), userController.changePassword);
    //Games
    app.get('/games/all', passport.authenticate('jwt',{session: false}),gameController.getAllGames);
    app.get('/games/:gameId', passport.authenticate('jwt',{session: false}),gameController.getGameById);
    app.post('/games/creategame', passport.authenticate('jwt',{session: false}), gameController.createGame);
};