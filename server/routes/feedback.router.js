const express = require('express');
const router = express.Router();
let feedbackData = require('../modules/feedback.data');

//GET
router.get('/', (req, res) => {
    res.send(feedbackData);
})

    // .catch(error => {
    //     res.sendStatus(500);
    // }); //end GET

//POST
router.post('/', (req, res) => {
    feedbackData.push(req.body);
    res.sendStatus(201);
})
// .catch(error => {
//     res.sendStatus(500);
// }); //end POST

module.exports = router;