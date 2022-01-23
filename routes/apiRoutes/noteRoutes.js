const router = require('express').Router();
const uniqid = require('uniqid');

const { notes } = require('../../db/notes.json');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid()

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    const remove = req.params.id;

    if (remove === -1) return res.status(404).json({})

    notes.splice(remove, 1)
    res.json(notes)
});

module.exports = router;