/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
    scheme = mongoose.Schema,
    stageScheme= new scheme({
        name: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model('Stages',stageScheme);