import NotesDomUtils from './notes-dom.util.mjs';
import Navigation from '../general/navigation.util.mjs';
import FilterUtils from '../general/filter.util.mjs';
import SortUtils from '../general/sort.util.mjs';
import GeneralDomChanges from '../general/general-dom.util.mjs';

export default class NotesEventListenerUtils {
    static addEventListeners(topLevelIdPrefix, notes) {
        NotesEventListenerUtils.addColorPaletteEventListener(topLevelIdPrefix);
        NotesEventListenerUtils.addEditButtonEventListeners(notes);
        NotesEventListenerUtils.addArrowEventListeners();
        NotesEventListenerUtils.addCreateNoteEventListener(topLevelIdPrefix);
        NotesEventListenerUtils.addByFinishDateEventListener(topLevelIdPrefix);
        NotesEventListenerUtils.addByCreatedDateEventListener(topLevelIdPrefix);
        NotesEventListenerUtils.addByImportanceEventListener(topLevelIdPrefix);
        NotesEventListenerUtils.addShowFinishedEventListener(topLevelIdPrefix);
    }

    static addColorPaletteEventListener(topLevelIdPrefix) {
        document
            .querySelector(`#${topLevelIdPrefix}color-palette-selector select[name="colorPalette"]`)
            .addEventListener('change', ($event) => GeneralDomChanges.changeColorTheme($event));
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
            arrowElement.addEventListener('click', NotesDomUtils.toggleNotesDescriptionAndArrow);
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
