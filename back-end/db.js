const mongoose = require('mongoose');

const MongoUri = "YOUR_MONGODB_CONNECTION_STRING";
mongoose.set('strictQuery', true);
//mongoose.set('bufferCommands', false);
const connectToMongo =async()=>{
    mongoose.connect(MongoUri,
        {}
        ,()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports= connectToMongo;