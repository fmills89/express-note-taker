const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes'),
        // null means we dont want to edit any of our existing data
        // 2 indicates we want to create white space between our values to make it readable
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}


module.exports = {
    createNewNote,
};