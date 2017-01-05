/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const passport = require('passport'),
    authenticationController = require('../controllers/AuthorizationController'),
    userController = require('../controllers/UserController'),
    gameController = require('../controllers/GameController'),
    competitionController = require('../controllers/CompetitionController'),
    teamController= require('../controllers/TeamController'),
    playerController = require('../controllers/PlayerController'),
    matchController = require('../controllers/MatchController');

module.exports = function (app,io) {

 var usernames = {};

 var rooms = ["Fifa","Dota","CS"];
 io.on('connection',function (socket) {
    socket.on('adduser',function (username) {
        socket.username = username;
        socket.room =  'room1';
        usernames[username] = username;
        socket.join('Fifa');
        socket.emit('updatechat','SERVER',"You have connected to the fiffa room");
        socket.broadcast.to("Fifa").emit('updatechat','SERVER',username + "joined.");
        socket.emit('updaterooms',rooms,"Fifa");
    }) ;
    socket.on('sendchat',function(data){
     io.sockets.in(socket.room).emit('updatechat',socket.username,data);
    });
     socket.on('switchRoom', function(newroom){
         socket.leave(socket.room);
         socket.join(newroom);
         socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
         socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
         socket.room = newroom;
         socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' joined');
         socket.emit('updaterooms', rooms, newroom);
     });

     socket.on('disconnect', function(){
         delete usernames[socket.username];
         io.sockets.emit('updateusers', usernames);
         socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
         socket.leave(socket.room);
     });
 });






 //Auth
   app.post('/authorization/register', authenticationController.registerUser);
   app.post('/authorization/login', authenticationController.loginUser);
   app.post('/authorization/logout', passport.authenticate('jwt' ,{session: false}), authenticationController.logoutUser);
   // Users
    app.get('/user/all' ,passport.authenticate('jwt',{session: false}), userController.getAllUsers);
    app.get('/user/:userId' ,passport.authenticate('jwt',{session: false}), userController.getUserById);
    app.post('/user/changepassword' , passport.authenticate('jwt',{session: false}), userController.changePassword);
    app.post('/user/addcompetition',passport.authenticate('jwt',{session: false}),userController.addCompetitionByUserId);
    app.post('/user/removecompetition',passport.authenticate('jwt',{session: false}),userController.removeCompetitionIdByUserId);

    /*
   NIET NODIG
    //Games
    app.get('/games/all', passport.authenticate('jwt',{session: false}),gameController.getAllGames);
    app.get('/games/:gameId', passport.authenticate('jwt',{session: false}),gameController.getGameById);
    app.post('/games/creategame', passport.authenticate('jwt',{session: false}), gameController.createGame);
    //Competitions
    app.get('/competitions/all', passport.authenticate('jwt',{session: false}),competitionController.getAllCompetitions);
    app.get('/competitions/:competitionId',competitionController.getCompetitionById);
    app.post('/competitions/createcompetition', passport.authenticate('jwt',{session: false}), competitionController.createCompetition);
    app.get('/competitions/upcommingcompetitions', competitionController.getUpcommingCompetitions);
    app.get('/competitions/getcompetitionsbygameid/:gameId',passport.authenticate('jwt',{session: false}), competitionController.getCompetitionsByGameId);
    app.get('/competitions/getupcommingcompetitionsbygameid/:gameId', competitionController.getUpcommingCompetitionsByGameId);
    //Teams
    app.get('/teams/all', passport.authenticate('jwt',{session: false}),teamController.getAllTeams);
    app.get('/teams/:teamId', passport.authenticate('jwt',{session: false}),teamController.getTeamById);
    app.post('/teams/createteam', passport.authenticate('jwt',{session: false}), teamController.createTeam);
    app.get('/teams/getteambyteamid/:gameId', teamController.getAllTeamsByGameId);
    app.post('teams/updateteam',passport.authenticate('jwt',{session: false}),teamController.updateTeam);
    //Players
    app.get('/players/all', passport.authenticate('jwt',{session: false}),playerController.getAllPlayers);
    app.get('/players/:playerId', passport.authenticate('jwt',{session: false}),playerController.getPlayerById);
    app.post('/players/createplayer', passport.authenticate('jwt',{session: false}), playerController.createPlayer);
    app.get('/players/getplayerbyteamid/:playerId',playerController.getAllPlayersByTeamId);
    app.post('/players/deleteplayer',playerController.removePlayerById);
    app.post('/players/updateplayer',playerController.updatePlayer);
    //Matches
    app.get('/matches/all', passport.authenticate('jwt',{session: false}),matchController.getAllMatches);
    app.get('/matches/:matchId', passport.authenticate('jwt',{session: false}),matchController.getMatchById);
    app.post('/matches/creatematch', passport.authenticate('jwt',{session: false}), matchController.createMatch);
    app.get('/matches/allupcommingmatches',matchController.getUpcommingMatches);
    app.get('/matches/allmatchesbygameid/:gameId',matchController.getAllMatchesByGameId);
    app.get('/matches/upcommingmatchesbygameid/:gameId',matchController.getUpcommingMatchesByGameId);
    app.get('/matches/allmatchesbycompetitionid/:competitionId',matchController.getUpcommingMatchesByCompetitionId);
    app.get('/matches/upcommingmatchesbycompetitionid/:competitionId', matchController.getUpcommingMatchesByCompetitionId);
    app.get('/matches/updatescore',matchController.updateMatchScore);
    app.get('/matches/updatestatus', matchController.updateMatchStatus);
    */
};