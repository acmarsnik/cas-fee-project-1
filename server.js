// server.js
import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8080;
const app = express();
app.get('/notes', (req, res) => {
    res.send({
        notes: [
            {
                id: 1,
                finishByDate: null,
                title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
                importance: 2,
                isFinished: true,
                finishedDate: null,
                shortDescription:
                    'HTML für die note App erstellen.\nCSS erstellen für die note App [...]',
                fullDescription:
                    'HTML für die note App erstellen.\nCSS erstellen für die note App \nand other stuff too.',
                hasExpand: true,
            },
            {
                id: 2,
                finishByDate: null,
                title: 'Einkaufen',
                importance: 1,
                isFinished: false,
                finishedDate: null,
                shortDescription: 'Butler \nEier [...]',
                fullDescription: 'Butler \nEier \nBrot',
                hasExpand: true,
            },
            {
                id: 3,
                finishByDate: null,
                title: 'Mami anrufen',
                importance: 0,
                isFinished: false,
                finishedDate: null,
                shortDescription: null,
                fullDescription: '888 888 88 88',
                hasExpand: false,
            },
        ],
    });
});

app.use(favicon(__dirname + '\\favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
