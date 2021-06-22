import NotesDomChanges from './notes-dom-changes.mjs';
import Navigation from './navigation.mjs';
import FilterUtils from './filter.util.mjs';
import SortUtils from './sort.util.mjs';

export default class NotesEventListeners {
    static addEventListeners(topLevelIdPrefix, notes) {
        NotesEventListeners.addEditButtonEventListeners(notes);
        NotesEventListeners.addArrowEventListeners();
        NotesEventListeners.addCreateNoteEventListener(topLevelIdPrefix);
        NotesEventListeners.addByFinishDateEventListener(topLevelIdPrefix);
        NotesEventListeners.addByCreatedDateEventListener(topLevelIdPrefix);
        NotesEventListeners.addByImportanceEventListener(topLevelIdPrefix);
        NotesEventListeners.addShowFinishedEventListener(topLevelIdPrefix);
    }

    static addEditButtonEventListeners(notes) {
        notes.forEach((note) => {
            document
                .querySelector(`.edit-button button[note-id="${note.id}"]`)
                .addEventListener('click', Navigation.navigateToEdit);
        });
    }

    static addArrowEventListeners() {
        const arrowElements = document.querySelectorAll('[id^="arrow-"]');

        arrowElements.forEach((arrowElement) => {
            arrowElement.addEventListener('click', NotesDomChanges.toggleNotesDescriptionAndArrow);
        });
    }

    static addCreateNoteEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}create-note`)
            .addEventListener('click', Navigation.navigateToCreate);
    }

    static addByFinishDateEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-finish-date`)
            .addEventListener('click', () => {
                const sortProperty = 'finishedDate';
                SortUtils.sortBy(sortProperty);
            });
    }

    static addByCreatedDateEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-created-date`)
            .addEventListener('click', () => {
                const sortProperty = 'createdDate';
                SortUtils.sortBy(sortProperty);
            });
    }

    static addByImportanceEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-importance`)
            .addEventListener('click', () => {
                const sortProperty = 'importance';
                SortUtils.sortBy(sortProperty);
            });
    }

    static addShowFinishedEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}show-finished`)
            .addEventListener('click', () => {
                const filterProperty = 'finishedDate';
                FilterUtils.filterBy(filterProperty);
            });
    }
}
