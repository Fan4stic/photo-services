const express = require('express');
const router = require('../routes/routes.js');
const app = express();
app.use(express.json());
const DBconnection = require('../db/connection');
const {getPhotos} = require('../controllers/controllers')

app.use(express.static(__dirname + `/../public`))
app.get('/api/restaurants/:resID/photos', getPhotos)

const port = 3004;
app.listen(port, () => console.log(`now listening on port ${port}`));

