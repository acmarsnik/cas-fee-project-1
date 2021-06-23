// server.js
import cors from 'cors';
import express from 'express';
import favicon from 'express-favicon';
import MongoClient from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
import NotesApi from './public/scripts/notes-api.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
app.use(cors());

async function getMongoClient() {
    const uri = NotesApi.getMongoUri('casFeeProject1User', '0iFO7Co4IElUCz3S');
    const mongoClient = await new MongoClient(uri);
    return mongoClient;
}

(async () => {
    const mongoClient = await getMongoClient();
    const notesApi = new NotesApi(mongoClient);
    await notesApi.connectToDb();

    app.get('/notes', async (_, res) => {
        res.send(await notesApi.find());
    });

    app.get('/note/:id', async (req, res) => {
        res.send(await notesApi.findOne(req.params.id));
    });

    app.put('/note', async (req, res) => {
        res.send(await notesApi.update(req.body));
    });

    app.post('/note', async (req, res) => {
        res.send(await notesApi.insertOne(req.body));
    });

    app.delete('/note:id', async (req, res) => {
        res.send(await notesApi.deleteOne(req.params.id));
    });

    app.use(favicon(__dirname + '\\favicon.ico'));
    // the __dirname is the current directory from where the script is running
    app.use(express.static(__dirname));
    // send the user to index html page inspite of the url
    app.get('*', (_, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    });

    app.listen(port);
})();
