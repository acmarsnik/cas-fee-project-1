// server.js
import cors from 'cors';
import express from 'express';
import favicon from 'express-favicon';
import MongoClient from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
import TextUtils from './public/scripts/text.util.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);

async function main() {
    const uri =
        'mongodb+srv://casFeeProject1User:0iFO7Co4IElUCz3S@cluster0.4ucsz.mongodb.net/project-1?retryWrites=true&w=majority';

    const client = await new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await listDatabases(client);
    } catch (e) {
        console.error(e);
    }

    return client;
}

async function insertOne(note) {
    const client = await main();
    const result = await client.db('project-1').collection('notes').insertOne(note);
    client.close();
    return result;
}

async function find() {
    const client = await main();
    const result = await (await client.db('project-1').collection('notes').find()).toArray();
    client.close();
    return result;
}

async function findOne(id) {
    const client = await main();
    const result = await client
        .db('project-1')
        .collection('notes')
        .findOne({ id: parseInt(id) });
    client.close();
    return result;
}

async function update(note) {
    const client = await main();
    const result = await client
        .db('project-1')
        .collection('notes')
        .updateOne(
            { id: note.id },
            {
                $set: {
                    title: note.title,
                    description: note.description,
                    importance: note.importance,
                    finishByDate: note.finishByDate,
                    isFinished: note.isFinished,
                    finishedDate: note.finishedDate,
                },
            },
        );
    client.close();
    return result;
}

async function deleteOne(note) {
    const client = await main();
    const result = await client.db('project-1').collection('notes').deleteOne({ id: note.id });
    client.close();
    return result;
}

app.use(express.json());
app.use(cors());

app.get('/notes', async (_, res) => {
    res.send(await find());
});

app.get('/note/:id', async (req, res) => {
    res.send(await findOne(req.params.id));
});

app.put('/note', async (req, res) => {
    res.send(await update(req.body));
});

app.post('/note', async (req, res) => {
    res.send(await insertOne(req.body));
});

app.delete('/note:id', async (req, res) => {
    res.send(await deleteOne(req.params.id));
});

app.use(favicon(__dirname + '\\favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
