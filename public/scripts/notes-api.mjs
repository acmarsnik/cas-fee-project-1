import MongoClient from 'mongodb';

export default class NotesApi {
    static getMongoUri(username, password) {
        return `mongodb+srv://${username}:${password}@cluster0.4ucsz.mongodb.net/project-1?retryWrites=true&w=majority`;
    }

    static async getMongoClient(username, password) {
        const uri = NotesApi.getMongoUri(username, password);
        const mongoClient = await new MongoClient(uri);
        return mongoClient;
    }

    static initializeRouting(app, notesApi) {
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
    }

    constructor(dbClient) {
        this.dbClient = dbClient;
    }

    async connectToDb() {
        let connectionSuccessful;

        try {
            await this.dbClient.connect();
            connectionSuccessful = true;
        } catch (e) {
            console.error(e);
            connectionSuccessful = false;
        }

        return connectionSuccessful;
    }

    async insertOne(note) {
        const result = await this.dbClient.db('project-1').collection('notes').insertOne(note);
        return result;
    }

    async find() {
        const result = await (
            await this.dbClient.db('project-1').collection('notes').find()
        ).toArray();
        return result;
    }

    async findOne(id) {
        const result = await this.dbClient
            .db('project-1')
            .collection('notes')
            .findOne({ id: parseInt(id) });
        return result;
    }

    async update(note) {
        const result = await this.dbClient
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
        return result;
    }

    async deleteOne(note) {
        const result = await this.dbClient
            .db('project-1')
            .collection('notes')
            .deleteOne({ id: note.id });
        return result;
    }
}
