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
        const adjustedBreakNotes = notes.map((note) =>
            note.shortDescription?.includes('\n') ||
            note.fullDescription?.includes('\n')
                ? {
                      ...note,
                      shortDescription: note.shortDescription
                          ? note.shortDescription.replaceAll('\n', '<br />')
                          : note.shortDescription,
                      fullDescription: note.fullDescription
                          ? note.fullDescription.replaceAll('\n', '<br />')
                          : note.fullDescription,
                  }
                : note,
        );

        console.log({ adjustedBreakNotes });
        return {
            notes: adjustedBreakNotes,
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

    addEventListeners(notes) {
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
            .getElementById('create-note')
            .addEventListener('click', this.navigateToCreate);
    }

    updateNotes(idPrefix, topLevelIdPrefix) {
        this.removeTopLevelElements(topLevelIdPrefix);
        const notes = this.notesService.getNotes();
        // eslint-disable-next-line
        const notesContainerHtml = this.handlebars.templates.notes(
            this.getContext(notes, idPrefix, topLevelIdPrefix),
        );
        const indexPageContainer = document.getElementById(
            'index-page-container',
        );
        indexPageContainer.innerHTML += notesContainerHtml;

        this.addEventListeners(notes);
        this.importanceComponent.addImportanceElements(
            notes.map((note) => note.importance),
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }
}
