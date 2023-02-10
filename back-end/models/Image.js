const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
  url:{
    type : String,
    required: true
  },
  timestamp:{
    type : Date,
    default : Date.now()
  }
});
module.exports = mongoose.model('Image',ImageSchema);