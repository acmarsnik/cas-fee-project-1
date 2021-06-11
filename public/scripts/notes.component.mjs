import NotesState from './notes-state.mjs';
import SortUtils from './sort.util.mjs';
import SortOptions from './sort-options.mjs';
import FilterUtils from './filter.util.mjs';

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
            const notesState = new NotesState('', 'edit', '', '', '', noteId);
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
        this.addByImportanceEventListener(topLevelIdPrefix);
        this.addShowFinishedEventListener(topLevelIdPrefix);
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
                this.sortBy(sortProperty);
            });
    }

    addByCreatedDateEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-created-date`)
            .addEventListener('click', () => {
                const sortProperty = 'createdDate';
                this.sortBy(sortProperty);
            });
    }

    sortBy(sortProperty) {
        const sortDirection = SortUtils.getSortDirection(
            window.history.state,
            sortProperty,
        );
        const sortedNotesState = new NotesState(
            '',
            'notes',
            'sort',
            sortProperty,
            sortDirection,
        );
        window.history.replaceState(
            sortedNotesState,
            sortedNotesState.getReplaceStateTitle(),
            sortedNotesState.getReplaceStateUrl(),
        );
    }

    addByImportanceEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}by-importance`)
            .addEventListener('click', () => {
                const sortProperty = 'importance';
                this.sortBy(sortProperty);
            });
    }

    addShowFinishedEventListener(topLevelIdPrefix) {
        document
            .getElementById(`${topLevelIdPrefix}show-finished`)
            .addEventListener('click', () => {
                const filterProperty = 'finishedDate';
                this.filterBy(filterProperty);
            });
    }

    filterBy(filterProperty) {
        const state = window.history.state;
        let filteredNotesState;

        if (
            state.transformationType === 'filter' &&
            state.transformationProperty === filterProperty
        ) {
            filteredNotesState = new NotesState('', 'notes', 'filter');
        } else {
            filteredNotesState = new NotesState(
                '',
                'notes',
                'filter',
                filterProperty,
            );
        }

        window.history.replaceState(
            filteredNotesState,
            filteredNotesState.getReplaceStateTitle(),
            filteredNotesState.getReplaceStateUrl(),
        );
    }

    getSortedNotes(notes, sortOptions) {
        return notes.slice().sort((a, b) => {
            if (
                sortOptions.property === 'createdDate' ||
                sortOptions.property === 'finishedDate'
            )
                return SortUtils.sortDates(a, b, sortOptions);
            else if (sortOptions.property === 'importance')
                return SortUtils.sortNumbers(a, b, sortOptions);
            else return notes;
        });
    }

    getFilteredNotes(notes, filterProperty) {
        return FilterUtils.removeFalsy(notes, filterProperty);
    }

    updateNotes(topLevelIdPrefix, transformationOptions = null) {
        this.removeTopLevelElements(topLevelIdPrefix);
        let notes = this.notesService.getNotes();
        if (transformationOptions) {
            if (transformationOptions.type === 'sort') {
                notes = this.getSortedNotes(
                    notes,
                    new SortOptions(
                        transformationOptions.property,
                        transformationOptions.sortDirection,
                    ),
                );
            } else if (transformationOptions.type === 'filter') {
                notes = this.getFilteredNotes(
                    notes,
                    transformationOptions.property,
                );
            }
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
