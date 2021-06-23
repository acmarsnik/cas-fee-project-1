import TextUtils from '../utils/general/text.util.mjs';

export default class Note {
    constructor(
        finishByDate,
        title,
        importance,
        description,
        id = null,
        finishedDate = null,
        createdDate = null,
        isForDisplayInHtml = false,
    ) {
        this.id = id;
        this.finishByDate = finishByDate;
        this.createdDate = createdDate ? createdDate : new Date().toISOString();
        this.title = title;
        this.importance = importance;
        this.finishedDate = finishedDate;
        this.isFinished = !!finishedDate;
        this.fullDescription = description;

        if (!!description && description.length > Note.getShortDescriptionLimit()) {
            this.shortDescription = `${description.substring(
                0,
                Note.getShortDescriptionLimit(),
            )} [...]`;
        } else {
            this.shortDescription = description;
        }

        if (isForDisplayInHtml) {
            this.shortDescription = TextUtils.convertLineBreaksForHTML(this.shortDescription);
            this.fullDescription = TextUtils.convertLineBreaksForHTML(this.fullDescription);
        }

        this.hasExpand = !(this.shortDescription === this.fullDescription);
    }

    static getShortDescriptionLimit() {
        return 20;
    }

    static getNoteForDB(note) {
        new Note(
            note.finishByDate,
            note.title,
            note.importance,
            note.description,
            note.id,
            note.finishedDate,
            note.createdDate,
        );
        return {
            finishByDate: note.finishByDate,
            title: note.title,
            importance: note.importance,
            description: TextUtils.convertLineBreaksForDB(note.fullDescription),
            id: note.id,
            finishedDate: note.finishedDate,
            createdDate: note.createdDate,
        };
    }
}
