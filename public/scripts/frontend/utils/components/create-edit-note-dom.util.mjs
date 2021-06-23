import DateUtils from '../general/date.util.mjs';
import Note from '../../models/note.mjs';

export default class CreateEditNoteDomUtils {
    static getFinishByDateValue(topLevelIdPrefix) {
        return document.getElementById(`${topLevelIdPrefix}finished-by-input`).value;
    }

    static getFinishByDateIsoString(topLevelIdPrefix) {
        return DateUtils.dateInputValueToISOString(
            CreateEditNoteDomUtils.getFinishByDateValue(topLevelIdPrefix),
        );
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
            CreateEditNoteDomUtils.getFinishByDateIsoString(topLevelIdPrefix),
            CreateEditNoteDomUtils.getTitle(topLevelIdPrefix),
            CreateEditNoteDomUtils.getImportance(),
            CreateEditNoteDomUtils.getDescription(topLevelIdPrefix),
            CreateEditNoteDomUtils.getNoteId(state),
        );
    }
}
