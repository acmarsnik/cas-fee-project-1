export default class HandlebarsContexts {
    static getCreateEditNoteContext(note, topLevelIdPrefix) {
        return {
            note,
            topLevelIdPrefix,
        };
    }
}
