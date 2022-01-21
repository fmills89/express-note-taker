const router = require('express').Router();
const uniqid = require('uniqid');

const { notes } = require('../../db/notes.json');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;