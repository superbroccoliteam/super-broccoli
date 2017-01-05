/**
 * Created by Jens-Laptop on 1/4/2017.
 */
/**
 * Created by Jens-Laptop on 1/4/2017.
 */
const user = require('../models/User'),
    mongoose = require('mongoose'),
    validator = require('validator'),
    match  = require('../models/Match');
//test; //586c0524169a6f5c04623749
exports.getAllMatches = function (req,res) {
    match.find(function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    })
        .populate('teamOneId',"_id name")
        .populate('teamOneId',"_id name");
};
exports.getMatchById = function (req,res) {
    if (!validator.isMongoId(req.params.matchId)) {
        return res.status(404).send('Match not found.');
    }
    match.findById(req.params.matchId,function (err, resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    })
        .populate('teamOneId',"_id name")
        .populate('teamOneId',"_id name");
};
exports.createMatch = function (req,res) {
    if(req.user.role === 'ADMIN'){
        req.checkBody('name','The name of the match is not valid').notEmpty().isLength({min:2,max:60});
        req.checkBody('gameId','The gameid of the match is not valid').notEmpty().isLength({min:2,max:60});
        req.checkBody('competitionId','The competitionid of the match is not valid').notEmpty();
        req.checkBody('teamOneId','The first team of the match is not valid').notEmpty();
        req.checkBody('teamTwoId','The second team of the match is not valid').notEmpty();
        req.checkBody('date','The date of the match is not valid').notEmpty().isDate();



        if (!validator.isMongoId(req.body.competitionId)) {
            return res.status(404).send({message:'Competition not found.'});
        }
        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message:'Game not found.'});
        }
        if (!validator.isMongoId(req.body.teamOneId)) {
            return res.status(404).send({message:'Team1 not found.'});
        }
        if (!validator.isMongoId(req.body.teamTwoId)) {
            return res.status(404).send({message:'Team2 not found.'});
        }
        const newMatch = new match({
            name:  req.body.name,
            competitionId: req.body.competitionId,
            gameId: req.body.gameId,
            teamOneId: req.body.teamOneId,
            teamTwoId: req.body.teamTwoId,
            date: req.body.date,
            score: "0-0"
        });

        newMatch.save(function (err) {
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
exports.getUpcommingMatches = function (req,res) {
    match.find({$or: [{status: 'BUSSY'},{endDate:{$gte:new Date()}}]},function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.getAllMatchesByGameId = function (req,res) {
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send({message:'Game not found.'});
    }
    match.find({gameId: req.params.gameId},function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.getUpcommingMatchesByGameId = function (req,res) {
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send({message:'Game not found.'});
    }
    match.find({$and:[{gameId: req.params.gameId},{$or: [{status: 'BUSSY'},{endDate:{$gte:new Date()}}]}]},function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.getAllMatchesByCompetitionId = function (req,res) {
    if (!validator.isMongoId(req.params.competitionId)) {
        return res.status(404).send({message:'Competition not found.'});
    }
    match.find({competitionId: req.params.competitionId},function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.getUpcommingMatchesByCompetitionId = function (req,res) {
    if (!validator.isMongoId(req.params.competitionId)) {
        return res.status(404).send({message:'Competition not found.'});
    }
    match.find({$and:[{competitionId: req.params.competitionId},{$or: [{status: 'BUSSY'},{endDate:{$gte:new Date()}}]}]},function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.updateMatchScore = function (req,res) {
    req.checkBody('matchId','The id of the match is not valid').notEmpty().isLength({min:2,max:60});
    req.checkBody('score','The score of the match is not valid').notEmpty().isLength({min:2,max:10});
    if (!validator.isMongoId(req.body.matchId)) {
        return res.status(404).send({message:'Match not found.'});
    }
    match.findById(req.body.matchId,function (err,matc) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {
            matc.score = req.body.score;
            matc.save(function (err) {
                if (err) {
                    res.status(500).send({message: err});
                }
                else res.status(201).send({message: "Succes"});
            });
        }
    })
};
exports.updateMatchStatus = function (req,res) {
    req.checkBody('matchId','The id of the match is not valid').notEmpty().isLength({min:2,max:60});
    req.checkBody('statuse','The status of the match is not valid').notEmpty().isLength({min:2,max:10});
    if (!validator.isMongoId(req.body.matchId)) {
        return res.status(404).send({message:'Match not found.'});
    }
    match.findById(req.body.matchId,function (err,matc) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {
            matc.status = req.body.status;
            matc.save(function (err) {
                if (err) {
                    res.status(500).send({message: err});
                }
                else res.status(201).send({message: "Succes"});
            });
        }
    })
};