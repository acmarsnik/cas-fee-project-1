export default class Note {
    static getShortDescriptionLimit() {
        return 20;
    }

    constructor(
        finishByDate,
        title,
        importance,
        description,
        id = null,
        finishedDate = null,
        createdDate = null,
    ) {
        this.id = id;
        this.finishByDate = finishByDate;
        this.createdDate = createdDate ? createdDate : new Date().toISOString();
        this.title = title;
        this.importance = importance;
        this.finishedDate = finishedDate;
        this.isFinished = !!finishedDate;
        this.fullDescription = description;

        if (description.length > Note.getShortDescriptionLimit()) {
            this.shortDescription = `${description.substring(
                0,
                Note.getShortDescriptionLimit(),
            )} [...]`;
        } else {
            this.shortDescription = description;
        }

        this.hasExpand = !(this.shortDescription === description);
    }
}
