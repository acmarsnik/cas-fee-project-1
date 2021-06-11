import NotesState from './notes-state.mjs';
import SortUtils from './sort.util.mjs';

export default class NotesComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    navigateToCreate() {
        const notesState = new NotesState('', 'create');
        window.history.replaceState(
            notesState,
            notesState.getReplaceStateTitle(),
            notesState.getReplaceStateUrl(),
        );
    }

    navigateToEdit($event) {
        const attributes = $event?.target?.attributes;
        if (
            attributes &&
            attributes['note-id'] &&
            attributes['note-id'].value
        ) {
            const noteId = attributes['note-id'].value;
            const notesState = new NotesState('', 'edit', '', '', noteId);
            window.history.replaceState(
                notesState,
                notesState.getReplaceStateTitle(),
                notesState.getReplaceStateUrl(),
            );
        }
    }

    removeTopLevelElements(topLevelIdPrefix) {
        document
            .querySelectorAll(`[id^="${topLevelIdPrefix}"`)
            .forEach((notesTemplateElement) => {
                notesTemplateElement.remove();
            });
    }

    getContext(notes, topLevelIdPrefix) {
        // const a = notes.map(note => note ? {...note, baz: [11,22,33]} : note)
        const notesAdjustedForDisplay = notes.map((note) => {
            return {
                ...note,
                finishedDate: note.finishedDate
                    ? note.finishedDate.toLocaleDateString()
                    : note.finishedDate,
                finishByDate: note.finishByDate
                    ? note.finishByDate.toLocaleDateString()
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
        };
    }

    toggleDescriptionsAndArrows($event) {
        const attributes = $event?.target?.attributes;
        const noteId = attributes ? attributes['note-id'].value : null;
        const arrowAndDescriptionsElements = document.querySelectorAll(
            `[id^="arrow-${noteId}"], [id^="description-${noteId}"]`,
        );
        arrowAndDescriptionsElements.forEach((arrowAndDescriptionsElement) => {
            arrowAndDescriptionsElement.classList.toggle('hidden');
        });
    }

    addEventListeners(topLevelIdPrefix, notes) {
        this.addEditButtonEventListeners(notes);
        this.addArrowEventListeners();
        this.addCreateNoteEventListener(topLevelIdPrefix);
        this.addByFinishDateEventListener(topLevelIdPrefix);
        this.addByCreatedDateEventListener(topLevelIdPrefix);
    }

    addEditButtonEventListeners(notes) {
        notes.forEach((note) => {
            document
                .querySelector(`.edit-button button[note-id="${note.id}"]`)
                .addEventListener('click', this.navigateToEdit);
        });
    }

    addArrowEventListeners() {
        const arrowElements = document.querySelectorAll('[id^="arrow-"]');

        arrowElements.forEach((arrowElement) => {
            arrowElement.addEventListener(
                'click',
                this.toggleDescriptionsAndArrows,
            );
        });
    }

    addCreateNoteEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}create-note`)
            .addEventListener('click', () => this.navigateToCreate());
    }

    addByFinishDateEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-finish-date`)
            .addEventListener('click', () => {
                const sortProperty = 'finishedDate';
                this.sortBy(topLevelIdPrefix, sortProperty);
            });
    }

    addByCreatedDateEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-created-date`)
            .addEventListener('click', () => {
                const sortProperty = 'createdDate';
                this.sortBy(topLevelIdPrefix, sortProperty);
            });
    }

    sortBy(topLevelIdPrefix, sortProperty) {
        const sortDirection = SortUtils.getSortDirection(
            window.history.state,
            sortProperty,
        );
        this.updateNotes(topLevelIdPrefix, {
            sortProperty,
            sortDirection,
        });
        const sortedNotesState = new NotesState(
            '',
            'notes',
            sortProperty,
            sortDirection,
        );
        window.history.replaceState(
            sortedNotesState,
            sortedNotesState.getReplaceStateTitle(),
            sortedNotesState.getReplaceStateUrl(),
        );
    }

    updateNotes(topLevelIdPrefix, sortObject = null) {
        this.removeTopLevelElements(topLevelIdPrefix);
        let notes = this.notesService.getNotes();
        if (sortObject) {
            notes = notes.slice().sort((a, b) => {
                return SortUtils.sortAbDates(a, b, sortObject);
            });
        }

        // eslint-disable-next-line
        const notesContainerHtml = this.handlebars.templates.notes(
            this.getContext(notes, topLevelIdPrefix),
        );
        const indexPageContainer = document.getElementById(
            'notes-page-container',
        );
        indexPageContainer.innerHTML += notesContainerHtml;

        this.addEventListeners(topLevelIdPrefix, notes);
        this.importanceComponent.addImportanceElements(
            notes.map((note) => note.importance),
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }
}
