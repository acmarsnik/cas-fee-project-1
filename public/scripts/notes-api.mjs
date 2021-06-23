export default class NotesApi {
    static getMongoUri(username, password) {
        return `mongodb+srv://${username}:${password}@cluster0.4ucsz.mongodb.net/project-1?retryWrites=true&w=majority`;
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
