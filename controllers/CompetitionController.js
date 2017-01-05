/**
 * Created by Jens-Laptop on 1/3/2017.
 */
const user = require('../models/User'),
    mongoose = require('mongoose'),
    competition  = require('../models/Competition'),
    validator = require('validator'),
    game = require('../models/Game'),
    moment = require('moment');

exports.getAllCompetitions = function (req,res) {

    if(req.user.role === 'ADMIN' && req.user.token != null) {
        competition.find(function (err, resp) {
            if (err) {
                res.status(500).send({message: "Error: " + err});
            }
            else {
                res.status(200).send(resp);
            }
        });
    }else{
        res.status(401).send({message: "Not authorized"})
    }
};
exports.getCompetitionById = function (req,res) {
        if (!validator.isMongoId(req.params.competitionId)) {
            return res.status(404).send({message:'Competition not found.'});
        }
        competition.findById(req.params.competitionId,function (err, resp) {
            if(err){res.status(500).send({message: "Error: " + err });}
            else {
                res.status(200).send(resp);

            }
        })
            .populate('teams','_id name');
};
exports.createCompetition =  function (req,res) {
    if(req.user.role === 'ADMIN' && req.user.token != null) {
        req.checkBody('name','The name of the competition is not valid').notEmpty().isLength({min:2,max:40});
        req.checkBody('prizepool','The prizepool of the competition is not valid').notEmpty().isLength({min:2,max:40})
        req.checkBody('gameId','The gameId of the game is not valid').notEmpty();
        req.checkBody('startDate','The startdate of the competition is not valid').notEmpty().isDate();
        req.checkBody('endDate','The enddate of the competition is not valid').notEmpty().isDate();
        req.checkBody('teams','The teams of the competition are not valid').notEmpty();

        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message: 'GameId is not valid.'});
        }
        if (req.body.stageId != null && !validator.isMongoId(req.body.stageId)) {
            return res.status(404).send('StageId is not valid.');
        }
        const newCompetition = new competition({
            name:  req.body.name,
            prizepool: req.body.prizepool,
            gameId: req.body.gameId,
            image: req.body.image,
            stageId: req.body.stageId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        });
        newCompetition.save(function (err,comp) {
            if(err){
                res.status(500).send({message: err});}
            else{
            competition.findByIdAndUpdate(comp._id,{$pushAll:{teams: req.body.teams.split(',')}},function(erro){
               if(erro){res.status(500).send({message: erro});}
            });
                res.status(201).send({message:"Succes"});
            }
        });
    }
    else {
        res.status(401).send({message:'Not authorized'});
    }

};

exports.getUpcommingCompetitions = function (req,res) {


        competition.find({endDate: {$gte:(new Date())}},function (err,resp) {
            if(err){res.status(500).send({message: "Error: " + err });}
            else {res.status(200).send(resp);}
        });
};
exports.getCompetitionsByGameId = function (req,res) {
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send({message: 'GameId is not valid.'});
    }
    competition.find({gameId:{$in: req.params.gameId}},function (err,resp) {
        if(err){res.status(500).send({message: err});}
        else {res.status(200).send(resp)}
    });
};
exports.getUpcommingCompetitionsByGameId = function(req,res){
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send({message: 'GameId is not valid.'});
    }
    var date = new Date().toISOString();


    competition.find({$and: [{gameId: req.params.gameId},{endDate:{$gte:new Date()}}]}, function (err,resp) {
        if(err){res.status(500).send({message: err});}
        else {res.status(200).send(resp)}
    });
};