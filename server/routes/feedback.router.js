const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// let feedbackData = require('../modules/feedback.data');

//DELETE
router.delete('/:id', (req, res) => {
    //set up query text
    let sqlText = `DELETE FROM "feedback" WHERE "id" = $1`;
    //run query with id of row to delete, send confirmation
    pool.query(sqlText, [req.params.id])
    .then(result => {
        res.sendStatus(204);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

//GET
router.get('/', (req, res) => {
    //set up query text
    let sqlText = `SELECT * FROM "feedback" ORDER BY "id" ASC`;
    //run query and send resulting table rows
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
    //set up variable (received from reducer state) and query text
    let fb = req.body;
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4)`;
    //run query using variable values and send confirmation
    pool.query(sqlText, [fb.feeling, fb.understanding, fb.support, fb.comments])
    .then(result => {
        res.sendStatus(201)
    })
    .catch(error => {
        res.sendStatus(500)
    })
})

module.exports = router;