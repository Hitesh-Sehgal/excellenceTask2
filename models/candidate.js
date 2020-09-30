const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//set up a mongoose model.
module.exports = mongoose.model('Candidate', new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    first_round: {
        type: Number
    },
    second_round: {
        type: Number
    },
    third_round: {
        type: Number
    }
}))