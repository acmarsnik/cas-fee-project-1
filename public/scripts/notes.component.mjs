export default class NotesComponent {
    constructor(
        handlebars,
        notesService,
        importanceComponent,
        templateIdPrefix,
    ) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
        this.templateIdPrefix = templateIdPrefix;
    }

    navigateToEdit($event) {
        const attributes = $event?.target?.attributes;
        let queryParameters = '';
        if (
            attributes &&
            attributes['note-id'] &&
            attributes['note-id'].value
        ) {
            const noteId = attributes['note-id'].value;
            queryParameters = `?noteId=${noteId}`;
        }
        window.location.assign(
            `/public/create-edit-note.html${queryParameters}`,
        );
    }

    removeAllNotesTemplateElements(topLevelIdPrefix) {
        document
            .querySelectorAll(`[id^="${topLevelIdPrefix}"`)
            .forEach((notesTemplateElement) => {
                notesTemplateElement.remove();
            });
    }

    getNotesContext(notes, idPrefix, topLevelIdPrefix) {
        return {
            notes,
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

    addNotesEventListeners(notes) {
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
            .addEventListener('click', this.navigateToEdit);
    }

    updateNotes(idPrefix, topLevelIdPrefix) {
        this.removeAllNotesTemplateElements(topLevelIdPrefix);
        const notes = this.notesService.getNotes();
        // eslint-disable-next-line
        const notesContainerHtml = this.handlebars.templates.notes(
            this.getNotesContext(notes, idPrefix, topLevelIdPrefix),
        );
        const indexPageContainer = document.getElementById(
            'index-page-container',
        );
        indexPageContainer.innerHTML += notesContainerHtml;

        this.addNotesEventListeners(notes);
        this.importanceComponent.addImportanceElements(
            notes.map((note) => note.importance),
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }
}
