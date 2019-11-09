const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/views/public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

consign().include("./src/routes").into(app);



module.exports = app;
