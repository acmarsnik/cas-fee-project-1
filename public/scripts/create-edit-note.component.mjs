export default class CreateEditNoteComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    navigateToNotes() {
        window.history.replaceState('notes', 'Notes', '/');
    }

    removeTopLevelElements(topLevelIdPrefix) {
        document
            .querySelectorAll(`[id^="${topLevelIdPrefix}"`)
            .forEach((notesTemplateElement) => {
                notesTemplateElement.remove();
            });
    }

    getContext(note, idPrefix, topLevelIdPrefix) {
        return {
            note,
            topLevelIdPrefix,
            idPrefix,
        };
    }

    addEventListeners(topLevelIdPrefix) {
        const saveButton = document.getElementById(
            `${topLevelIdPrefix}speichern`,
        );
        const cancelButton = document.getElementById(
            `${topLevelIdPrefix}cancel`,
        );
        saveButton.addEventListener('click', this.navigateToNotes);
        cancelButton.addEventListener('click', this.navigateToNotes);
    }

    updateNote(idPrefix, topLevelIdPrefix, noteExists = false, noteId = null) {
        this.removeTopLevelElements(topLevelIdPrefix);

        let note = {
            title: null,
            description: null,
            finishByDate: null,
            importance: 0,
        };

        if (noteExists) {
            note = this.notesService.getNote(noteId);
        }

        // eslint-disable-next-line
        const createEditNoteContainerHtml =
            this.handlebars.templates.createEditNote(
                this.getContext(note, idPrefix, topLevelIdPrefix),
            );
        const createEditNotePageContainer = document.getElementById(
            'create-edit-note-page-container',
        );
        createEditNotePageContainer.innerHTML += createEditNoteContainerHtml;

        this.addEventListeners(topLevelIdPrefix);
        this.importanceComponent.addImportanceElements(
            [note.importance],
            `[id^="${topLevelIdPrefix}importance"]:not([id*="label"]).importance`,
        );
    }
}
