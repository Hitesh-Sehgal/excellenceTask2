const express = require('express');
const app = express.Router();


const insertCandidate = require('./insertCandidate');
const assignScore = require('./assignScore');
const highestScore = require('./highestScore');

app.post('/insertCandidate', insertCandidate);
app.post('/assignScore', assignScore);
app.get('/highestScore', highestScore);

// app.use((err, req, res, next) => {
//     if(err){
//         res.json({
//             success: false,
//             msg: err
//         })       
//     }
// })

module.exports = app;