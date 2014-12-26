var Users = require('../models/user.server.model.js');

exports.list = function(req, res){
  var q = Users.find();

  q.exec(function(err, results){
    res.send(results);
  });
};
