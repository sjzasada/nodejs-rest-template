'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({

  _id: {
    type: String,
    Required: 'Enter the userid'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name'
  },
  email: {
    type: String,
    Required: 'Kindly enter the email'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  dob: Date,
  imageUrl: String,
  currentWeight: Number,
  height: Number,
  male: Boolean,
  timestamp: {
    type: Date,
    default: Date.now
  },
  bio: String

});

module.exports = mongoose.model('Profile', ProfileSchema);
