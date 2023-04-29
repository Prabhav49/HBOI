const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    accountNumber:{
        type:Number,
        required:true,
        min:5,
        unique:true,
    },
    accountDescription:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    cifNo:{
        type:String,
        required:true,
    },
    ifscCode:{
        type:String,
        required:true,
    },
    micrCode:{
        type:Number,
        required:true,

    }
    
},{timestamps:true});

const User = mongoose.model('user', UserSchema);
module.exports = User