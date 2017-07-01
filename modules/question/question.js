/**
 * Created by hieun on 7/1/2017.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

let router = express.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/question.html'));
});

router.post('/', (req, res) => {
    let file_path = path.join(__dirname, 'list.txt');
    console.log(req.body.ques);
    fs.appendFile(file_path, req.body.ques + '\n', (err) => {
        if (err) throw err;
        console.log('Added!');
        res.sendFile(file_path);
    });
});

module.exports = router;