const mongoose = require('mongoose');

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:5,
    },
    
},{timestamps:true});

module.exports = mongoose.model('user', UserSchema);