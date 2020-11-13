const express = require('express');
const router = require('../routes/routes.js');
const app = express();
app.use(express.json());
const DBconnection = require('../db/connection');

app.use('/', router);


const port = 3000;
app.listen(port, () => console.log(`now listening on port ${port}`));

