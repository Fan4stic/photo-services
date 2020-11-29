const express = require('express');
const router = express.Router();
const {getPhotos} = require('../controllers/controllers')

router
.route('/')
.get(getPhotos);

module.exports = router;
