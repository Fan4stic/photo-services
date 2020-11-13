const express = require('express');
const router = express.Router();
const {getPhotos, addUser} = require('../controllers/controllers')

router
.route('/api/restaurants/:id/photos')
.get(getPhotos);

router
.route('/api/restaurants')
.post(addUser)

module.exports = router;

