const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new Schema({
  name:{
    type : String,
    required: true
  },
  email:{
    type : String,
    required:true
  },
  code : {
    type : String,
    require : true
  },
  imgs:[{
    type : String
  }]
});
module.exports = mongoose.model('Data',DataSchema);