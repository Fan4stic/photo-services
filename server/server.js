const express = require('express');
const router = require('../routes/routes.js');
const app = express();
app.use(express.json());
const DBconnection = require('../db/connection');

app.use(express.static(__dirname + `/../public`))
app.use('/api/restaurants', router)

const port = 3003;
app.listen(port, () => console.log(`now listening on port ${port}`));

