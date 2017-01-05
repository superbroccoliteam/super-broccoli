/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
   mmo = require('mongoose-moment')(mongoose);
    scheme = mongoose.Schema,
    competitionScheme= new scheme({
        name: {
            type: String,
            required: true
        },
        prizepool: {
            type: String

        },
        gameId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Games',
            required: true
        },
        stageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stages'

        },
        image: {
            type: String

        },
        startDate:{
          type: Date,
            required:true
        },
        endDate:{
            type: Date,
            required: true
        },
        teams:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teams',
            required: true
        }]

    });
module.exports = mongoose.model('Competitions',competitionScheme);