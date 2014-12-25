var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String
});

// export model
module.exports = mongoose.model('users', userSchema);
