import Note from './note.mjs';
import DateUtils from './date.util.mjs';

export default class HandlebarsContexts {
    static getCreateEditNoteContext(note, topLevelIdPrefix) {
        return {
            note: HandlebarsContexts.getNoteForCreateEditDisplay(note),
            topLevelIdPrefix,
        };
    }

    static getNotesContext(notes, topLevelIdPrefix, isFiltered) {
        const notesAdjustedForDisplay = notes.map((note) => {
            const adjustedNote = HandlebarsContexts.getNoteForNotesDisplay(note);
            return adjustedNote;
        });

        return {
            notes: notesAdjustedForDisplay,
            topLevelIdPrefix,
            isFiltered,
        };
    }

    static getNoteForNotesDisplay(note) {
        const adjustedNote = new Note(
            note.finishByDate
                ? new Date(note.finishByDate).toLocaleDateString()
                : note.finishByDate,
            note.title,
            note.importance,
            note.fullDescription,
            note.id,
            note.finishedDate
                ? new Date(note.finishedDate).toLocaleDateString()
                : note.finishedDate,
            note.createdDate,
            true,
        );

        return adjustedNote;
    }

    static getNoteForCreateEditDisplay(note) {
        return new Note(
            DateUtils.formatForDateInputValue(note.finishByDate),
            note.title,
            note.importance,
            note.fullDescription,
            note.id,
            DateUtils.formatForDateInputValue(note.finishedDate),
            note.createdDate,
        );
    }
}
