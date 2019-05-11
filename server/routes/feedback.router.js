const express = require('express');
const router = express.Router();
let feedbackData = require('../modules/feedback.data');

//GET
router.get('/', (req, res) => {
    res.send(feedbackData);
})

//POST
router.post('/', (req, res) => {
    feedbackData.push(req.body);
    res.sendStatus(201);
})

module.exports = router;