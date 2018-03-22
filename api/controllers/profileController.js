'use strict';

var mongoose = require('mongoose'),
  Profile = mongoose.model('Profile');


//admin
exports.list_all_profiles = function(req, res) {
  console.log("profile get called");
  Profile.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_profile_admin = function(req, res) {
  Profile.remove({
    _id: req.params.profileid
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Profile successfully deleted' });
  });
};

exports.read_a_profile_admin = function(req, res) {
  Profile.findById(req.params.profileid, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

//User

exports.create_a_profile = function(req, res) {
  var new_profile = new Profile(req.body);
  new_profile._id = req.user;
  new_profile.timestamp = Date.now;
  new_profile.save(function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};


exports.read_a_profile = function(req, res) {
  Profile.findById(req.user, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};


exports.update_a_profile = function(req, res) {
  req.body._id=req.user;
  req.body.timestamp=Date.now;
  Profile.findOneAndUpdate({_id: req.user}, req.body, {new: true}, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};


exports.delete_a_profile = function(req, res) {
  Profile.remove({
    _id: req.user
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Profile successfully deleted' });
  });
};
