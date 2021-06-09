export default class NotesComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    navigateToCreate() {
        window.history.replaceState(
            'create-note',
            'Create Note',
            `?create=true`,
        );
    }

    navigateToEdit($event) {
        const attributes = $event?.target?.attributes;
        let editQueryParameter = '';
        if (
            attributes &&
            attributes['note-id'] &&
            attributes['note-id'].value
        ) {
            const noteId = attributes['note-id'].value;
            editQueryParameter = `noteId=${noteId}`;
            window.history.replaceState(
                `edit-note-${noteId}`,
                'Edit Note',
                `?${editQueryParameter}`,
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

    getContext(notes, idPrefix, topLevelIdPrefix) {
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
            idPrefix,
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

    addEventListeners(idPrefix, topLevelIdPrefix, notes) {
        notes.forEach((note) => {
            document
                .querySelector(`.edit-button button[note-id="${note.id}"]`)
                .addEventListener('click', this.navigateToEdit);
        });

        const arrowElements = document.querySelectorAll('[id^="arrow-"]');

        arrowElements.forEach((arrowElement) => {
            arrowElement.addEventListener(
                'click',
                this.toggleDescriptionsAndArrows,
            );
        });

        document
            .getElementById(`${topLevelIdPrefix}create-note`)
            .addEventListener('click', () => this.navigateToCreate());
        document
            .getElementById(`${topLevelIdPrefix}by-finish-date`)
            .addEventListener('click', () => {
                const state = window.history.state;
                console.log({ state });
                let direction = 'descending';
                if (
                    state.includes('sortProperty=finishedDate') &&
                    state.includes('direction=descending')
                ) {
                    direction = 'ascending';
                }
                this.updateNotes(idPrefix, topLevelIdPrefix, {
                    property: 'finishedDate',
                    direction,
                });
                window.history.replaceState(
                    `notes?sortProperty=finishedDate&direction=${direction}`,
                    'Notes',
                    `?sortProperty=finishedDate&direction=${direction}`,
                );
            });
    }

    updateNotes(idPrefix, topLevelIdPrefix, sortObject = null) {
        this.removeTopLevelElements(topLevelIdPrefix);
        let notes = this.notesService.getNotes();
        console.log({ notes });
        if (sortObject) {
            notes = notes.slice().sort((a, b) => {
                const sortProperty = sortObject.property;
                const direction = sortObject.direction;
                const bTime = b[sortProperty] ? b[sortProperty].getTime() : 0;
                const aTime = a[sortProperty] ? a[sortProperty].getTime() : 0;
                if (direction === 'descending') return bTime - aTime;
                else return aTime - bTime;
            });
        }

        // eslint-disable-next-line
        const notesContainerHtml = this.handlebars.templates.notes(
            this.getContext(notes, idPrefix, topLevelIdPrefix),
        );
        const indexPageContainer = document.getElementById(
            'index-page-container',
        );
        indexPageContainer.innerHTML += notesContainerHtml;

        this.addEventListeners(idPrefix, topLevelIdPrefix, notes);
        this.importanceComponent.addImportanceElements(
            notes.map((note) => note.importance),
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }
}
