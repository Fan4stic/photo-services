const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true
  },
  date: {
    type: Date
  },
  user: {
    "username": String,
    "friends": Number,
    "reviews": Number,
    "avatar": String,
    "yelpElite": Boolean
  },
  resID: {
    type: Number
  }
});

module.exports = mongoose.model('Photo', PhotoSchema);

// add yelp elite
// add avatar