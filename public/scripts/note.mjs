const shortDescriptionLimit = 20;

export default class Note {
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
        this.isFinished = finishedDate ? true : false;
        this.fullDescription = description;
        this.shortDescription =
            description.length > shortDescriptionLimit
                ? `${description.substring(0, shortDescriptionLimit)} [...]`
                : description;
        this.hasExpand = this.shortDescription === description ? false : true;
    }
}
