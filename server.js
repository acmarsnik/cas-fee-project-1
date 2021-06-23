// server.js
import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
import { fileURLToPath } from 'url';
import notes from './public/scripts/notes.data.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8080;
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.get('/notes', (req, res) => {
    res.send(notes);
});

app.put('/note', (req, res) => {
    const note = req.body;
    console.log(note);
    const indexOfNoteToUpdate = notes.findIndex((n) => n.id === note.id);
    if (indexOfNoteToUpdate >= 0) {
        notes[indexOfNoteToUpdate] = note;
    } else {
        notes.push(note);
    }

    res.send(notes);
});

app.post('/note', (req, res) => {
    const note = req.body;
    console.log(note);
    notes.push(note);

    res.send(notes);
});

app.delete('/note', (req, res) => {
    const note = req.body;
    console.log(note);
    const indexOfNoteToUpdate = notes.findIndex((n) => n.id === note.id);

    if (indexOfNoteToUpdate >= 0) {
        notes.splice(indexOfNoteToUpdate, 1);
    }

    res.send(notes);
});

app.use(favicon(__dirname + '\\favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
