const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// let feedbackData = require('../modules/feedback.data');

//GET
router.get('/', (req, res) => {
    // res.send(feedbackData);
    let sqlText = `SELECT * FROM "feedback" ORDER BY "id" ASC`;
    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        res.sendStatus(500);
    })
})

//POST
router.post('/', (req, res) => {
    // feedbackData.push(req.body);
    let fb = req.body;
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [fb.feeling, fb.understanding, fb.support, fb.comments])
    .then(result => {
        res.sendStatus(201)
    })
    .catch(error => {
        res.sendStatus(500)
    })
})

module.exports = router;