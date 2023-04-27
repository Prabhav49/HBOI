const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://bankAdmin:hboi123@cluster0.7u494xx.mongodb.net/hboi";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then( ()=>
    console.log("Connected to mongo Successful")
)
    
}

module.exports = connectToMongo; 