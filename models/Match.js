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
            ref: 'Competition'
        },
        gameId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Game',
            required: true
        },
        teamOneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Team',
            required: true
        },
        teamTwoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Team',
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
            type:mongoose.Schema.Types.Date,
            required: true
        },
        time: {
          type: mongoose.Schema.Types.Timestamp,
            required: true
        }
    });
module.exports = mongoose.model('Matches',matchScheme);