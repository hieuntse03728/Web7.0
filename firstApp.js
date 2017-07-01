/**
 * Created by hieun on 7/1/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');

const Router = require('./modules/question/question.js');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/question', Router);

app.listen(3000);