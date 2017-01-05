/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
    scheme = mongoose.Schema,
    matchScheme= new scheme({
        name: {
            type: String,
            required: true
        },
        competitionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Competitions'
        },
        gameId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Games',
            required: true
        },
        teamOneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Teams',
            required: true
        },
        teamTwoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Teams',
            required: true
        },
        score: {
            type:String,
            required: true
        },
       status: {
            type: String,
            enum: ['WAITING', 'DONE', 'DEFERRED', 'BUSY'],
            default: 'WAITING',
            uppercase: true
        },
        date: {
            type:Date,
            required: true
        }

    });
module.exports = mongoose.model('Matches',matchScheme);