import NotesState from './notes-state.mjs';
import GeneralDomChanges from './general-dom-changes.mjs';
import HandlebarsContexts from './handlebars-contexts.mjs';
import NotesEventListeners from './notes-event-listeners.mjs';
import TransformationUtils from './transformation.util.mjs';

export default class NotesComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    async updateIsFinished(topLevelIdPrefix, note) {
        const updatedNote = {
            ...note,
            isFinished: !note.isFinished,
            finishedDate: !note.isFinished ? new Date().toISOString() : null,
        };
        let response = await this.notesService.updateNote(updatedNote);
        const finished = await this.updateNotes(
            topLevelIdPrefix,
            NotesState.getNotesTransformationOptions(window.history.state),
        );

        return { response, finished };
    }

    addEventListeners(topLevelIdPrefix, notes) {
        this.addIsFinishedEventListeners(topLevelIdPrefix, notes);
        NotesEventListeners.addEventListeners(topLevelIdPrefix, notes);
    }

    addIsFinishedEventListeners(topLevelIdPrefix, notes) {
        notes.forEach((note) => {
            document
                .querySelector(`#${topLevelIdPrefix}finished-${note.id}`)
                .addEventListener('click', () => this.updateIsFinished(topLevelIdPrefix, note));
        });
    }

    updateNotesDom(notes, topLevelIdPrefix, isFiltered) {
        const notesContainerHtml = this.handlebars.templates.notes(
            HandlebarsContexts.getNotesContext(notes, topLevelIdPrefix, isFiltered),
        );
        const indexPageContainer = document.getElementById('notes-page-container');
        indexPageContainer.innerHTML += notesContainerHtml;
    }

    addImportanceElements(notes, topLevelIdPrefix) {
        this.importanceComponent.addImportanceElements(
            notes.map((note) => note.importance),
            `[id^="${topLevelIdPrefix}importance-"]:not([id*="padding"]).importance`,
        );
    }

    async updateNotes(topLevelIdPrefix, transformationOptions = null) {
        GeneralDomChanges.removeElementsWhereIdStartsWith(topLevelIdPrefix);
        const { notes, isFiltered } = TransformationUtils.transformNotes(
            await this.notesService.getNotes(),
            transformationOptions,
        );
        this.updateNotesDom(notes, topLevelIdPrefix, isFiltered);
        this.addEventListeners(topLevelIdPrefix, notes);
        this.addImportanceElements(notes, topLevelIdPrefix);

        return true;
    }
}
