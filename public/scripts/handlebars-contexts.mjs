export default class HandlebarsContexts {
    static getCreateEditNoteContext(note, topLevelIdPrefix) {
        return {
            note,
            topLevelIdPrefix,
        };
    }

    static getNotesContext(notes, topLevelIdPrefix, isFiltered) {
        // const a = notes.map(note => note ? {...note, baz: [11,22,33]} : note)
        const notesAdjustedForDisplay = notes.map((note) => {
            return {
                ...note,
                finishedDate: note.finishedDate
                    ? new Date(note.finishedDate).toLocaleDateString()
                    : note.finishedDate,
                finishByDate: note.finishByDate
                    ? new Date(note.finishByDate).toLocaleDateString()
                    : note.finishByDate,
                shortDescription: note.shortDescription
                    ? note.shortDescription.replaceAll('\n', '<br />')
                    : note.shortDescription,
                fullDescription: note.fullDescription
                    ? note.fullDescription.replaceAll('\n', '<br />')
                    : note.fullDescription,
            };
        });

        return {
            notes: notesAdjustedForDisplay,
            topLevelIdPrefix,
            isFiltered,
        };
    }
}
