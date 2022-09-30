const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nom : {
        type : String,
        required: true
    },
    prenom : {
        type : String,
        required: true
    },
    telephone : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    sexe : String
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;