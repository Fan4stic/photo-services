const express = require('express');
const router = express.Router();
const {getPhotos} = require('../controllers/controllers')

router
.route('/api/restaurants/:id/photos')
.get(getPhotos);

module.exports = router;

