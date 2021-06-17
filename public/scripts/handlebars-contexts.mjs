export default class HandlebarsContexts {
    static getCreateEditNoteContext(note, idPrefix, topLevelIdPrefix) {
        return {
            note,
            topLevelIdPrefix,
            idPrefix,
        };
    }
}
