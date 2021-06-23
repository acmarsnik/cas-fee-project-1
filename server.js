// server.js
import cors from 'cors';
import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
import { fileURLToPath } from 'url';
import NotesApi from './public/scripts/backend/notes-api.mjs';

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

(async () => {
    const mongoClient = await NotesApi.getMongoClient('casFeeProject1User', '0iFO7Co4IElUCz3S');
    const notesApi = new NotesApi(mongoClient);
    await notesApi.connectToDb();
    NotesApi.initializeRouting(app, notesApi);

    app.use(favicon(__dirname + '\\favicon.ico'));
    // the __dirname is the current directory from where the script is running
    app.use(express.static(__dirname));
    // send the user to index html page inspite of the url
    app.get('*', (_, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    });

    app.listen(port);
})();
