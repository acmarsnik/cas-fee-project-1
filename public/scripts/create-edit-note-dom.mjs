import DateUtils from './date.util.mjs';
import Note from './note.mjs';

export default class CreateEditNoteDom {
    static getFinishByDateValue(topLevelIdPrefix) {
        return document.getElementById(`${topLevelIdPrefix}finished-by-input`).value;
    }

    static getFinishByDateIsoString(topLevelIdPrefix) {
        return DateUtils.dateInputValueToISOString(this.getFinishByDateValue(topLevelIdPrefix));
    }

    static getTitle(topLevelIdPrefix) {
        return document.getElementById(`${topLevelIdPrefix}title-input`).value;
    }

    static getImportance() {
        return document.querySelectorAll('#create-edit-note-page-container .bolt.black').length;
    }

    static getDescription(topLevelIdPrefix) {
        return document.getElementById(`${topLevelIdPrefix}description-input`).value;
    }

    static getNoteId(state) {
        return state?.noteId
            ? state.noteId
            : document.querySelectorAll('.edit-button button[note-id]').length + 1;
    }

    static getNote(topLevelIdPrefix, state) {
        return new Note(
            this.getFinishByDateIsoString(topLevelIdPrefix),
            this.getTitle(topLevelIdPrefix),
            this.getImportance(),
            this.getDescription(topLevelIdPrefix),
            this.getNoteId(state),
        );
    }
}
