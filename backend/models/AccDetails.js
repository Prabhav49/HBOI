const mongoose = require('mongoose');

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
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
   
    location:{
        type:String,
        occupation:String,
    },
},{timestamps:true});

module.exports = mongoose.model('user', UserSchema);