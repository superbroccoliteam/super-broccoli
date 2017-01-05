/**
 * Created by Jens-Laptop on 1/4/2017.
 */
const user = require('../models/User'),
    mongoose = require('mongoose'),
    validator = require('validator'),
    player  = require('../models/Player');
//test; //586c0524169a6f5c04623749
exports.getAllPlayers = function (req,res) {
    player.find(function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.getPlayerById = function (req,res) {
    if (!validator.isMongoId(req.params.playerId)) {
        return res.status(404).send('Player not found.');
    }
    player.findById(req.params.playerId,function (err, resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.createPlayer = function (req,res) {
    if(req.user.role === 'ADMIN'){
        req.checkBody('fullname','The name of the player is not valid').notEmpty().isLength({min:2,max:60});
        req.checkBody('nickname','The nickname of the player is not valid').notEmpty().isLength({min:2,max:60});
        req.checkBody('teamId','The team of the player is not valid').notEmpty();
        req.checkBody('gameId','The game of the player is not valid').notEmpty();
        req.checkBody('role','The role of the player is not valid').notEmpty().isLength({min:2,max:60});

        if (!validator.isMongoId(req.body.teamId)) {
            return res.status(404).send({message:'Team not found.'});
        }
        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message:'Game not found.'});
        }
        const newPlayer = new player({
            fullname:  req.body.fullname,
            nickname: req.body.nickname,
            role: req.body.role,
            image: req.body.image,
            teamId: req.body.teamId,
            gameId: req.body.gameId
        });

        newPlayer.save(function (err) {
            if(err){
                res.status(500).send({message: err});
            }
            else res.status(201).send({message:"Succes"});
        });
    }
    else {
        res.status(401).send({message: 'Unauthorized'});
    }
};
exports.getAllPlayersByTeamId = function (req,res) {
    if (!validator.isMongoId(req.params.teamId)) {
        return res.status(404).send({message:'Team not found.e'});
    }
    player.find( {teamId: req.params.teamId },function (err,resp) {
        if(err){
            res.status(500).send({message: err});
        }
        else res.status(201).send(resp);
    })
};
exports.removePlayerById = function (req,res) {
    req.checkBody('playerId','The id of the player is not valid').notEmpty();
    if (!validator.isMongoId(req.body.playerId)) {
        return res.status(404).send({message:'Team not found.e'});
    }
    player.remove({_id:req.body.playerId},function (err) {
        if(err){
            res.status(500).send({message: err});
        }
        else res.status(201).send({message: "Succes"});
    })
};
exports.updatePlayer = function (req,res) {
    if(req.user.role === 'ADMIN') {
        req.checkBody('fullname', 'The name of the player is not valid').notEmpty().isLength({min: 2, max: 60});
        req.checkBody('nickname', 'The nickname of the player is not valid').notEmpty().isLength({min: 2, max: 60});
        req.checkBody('teamId', 'The team of the player is not valid').notEmpty();
        req.checkBody('gameId', 'The game of the player is not valid').notEmpty();
        req.checkBody('role', 'The role of the player is not valid').notEmpty().isLength({min: 2, max: 60});
        req.checkBody('playerId', 'The id of the player is not valid').notEmpty();

        if (!validator.isMongoId(req.body.teamId)) {
            return res.status(404).send({message: 'Team not found.'});
        }
        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message: 'Game not found.'});
        }
        if (!validator.isMongoId(req.body.playerId)) {
            return res.status(404).send({message: 'Player not found.'});
        }

        player.findById(req.body.playerId, function (err, play) {
            play.fullname = req.body.fullname;
            play.nickname = req.body.nickname;
            play.role = req.body.description;
            play.image = req.body.image;
            play.teamId = req.body.teamId;
            play.gameId = req.body.gameId;
            play.save(function (err) {
                if (err) {
                    res.status(500).send({message: err});
                }
                else res.status(201).send({message: "Succes"});
            });
        });
    }
};