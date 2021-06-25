import Note from '../../models/note.mjs';
import DateUtils from './date.util.mjs';

export default class HandlebarsContextUtils {
    static getCreateEditNoteContext(note, topLevelIdPrefix) {
        return {
            note: HandlebarsContextUtils.getNoteForCreateEditDisplay(note),
            topLevelIdPrefix,
        };
    }

    static getNotesContext(notes, topLevelIdPrefix, isFiltered, colorPalette) {
        const notesAdjustedForDisplay = notes.map((note) => {
            const adjustedNote = HandlebarsContextUtils.getNoteForNotesDisplay(note);
            return adjustedNote;
        });

        return {
            notes: notesAdjustedForDisplay,
            topLevelIdPrefix,
            isFiltered,
            isBlackWhiteStyleSelected: colorPalette === 'blackWhiteStyle',
            isDarkModeSelected: colorPalette === 'darkMode',
            isRainbowSelected: colorPalette === 'rainbow',
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
