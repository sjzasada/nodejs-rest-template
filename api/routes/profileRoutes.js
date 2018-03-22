'use strict';
var express = require('express');
var admin = require('../../middlewares/admin');

module.exports = function(app) {
  var profile = require('../controllers/profileController');

  var v1 = express.Router();

  console.log("Setting up routes");

  v1.post('/profile', profile.create_a_profile);
  v1.get('/profile', profile.read_a_profile);
  v1.put('/profile', profile.update_a_profile);
  v1.delete('/profile', profile.delete_a_profile);

  v1.get('/profiles', admin, profile.list_all_profiles);
  v1.get('/profiles/:profileid', admin, profile.read_a_profile_admin);
  v1.delete('/profiles/:profileid', admin, profile.delete_a_profile_admin);

  app.use('/v1', v1);
  // todoList Routes
  // app.route('/profiles')
  //   .get(admin, profile.list_all_profiles)
  //
  // app.route('/profiles/:profileid')
  //   .get(admin, profile.read_a_profile_admin)
  //   .delete(admin, profile.delete_a_profile_admin);




};
