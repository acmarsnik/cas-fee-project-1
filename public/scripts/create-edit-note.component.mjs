export default class CreateEditNoteComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    navigateToNotes() {
        console.log('Navigate to Notes!!!');
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

        const descriptionTextArea = document.getElementById(
            `${topLevelIdPrefix}description-input`,
        );

        descriptionTextArea.addEventListener('focusout', () => {
            console.log({
                descriptionTextAreaValue: descriptionTextArea.value,
            });
        });
    }

    updateNote(idPrefix, topLevelIdPrefix, noteExists = false, noteId = null) {
        console.log({ idPrefix });
        console.log({ topLevelIdPrefix });
        console.log({ noteExists });
        console.log({ noteId });

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
            [note],
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }
}
