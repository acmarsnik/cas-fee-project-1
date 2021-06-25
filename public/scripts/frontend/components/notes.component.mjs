import NotesState from '../models/notes-state.mjs';
import GeneralDomUtils from '../utils/general/general-dom.util.mjs';
import HandlebarsContexts from '../utils/general/handlebars-context.util.mjs';
import NotesEventListeners from '../utils/components/notes-event-listener.util.mjs';
import TransformationUtils from '../utils/general/transformation.util.mjs';

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
        const response = await this.notesService.updateNote(updatedNote);
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

    updateNotesDom(notes, topLevelIdPrefix, isFiltered, colorPalette) {
        const notesContainerHtml = this.handlebars.templates.notes(
            HandlebarsContexts.getNotesContext(notes, topLevelIdPrefix, isFiltered, colorPalette),
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
        GeneralDomUtils.removeElementsWhereIdStartsWith(topLevelIdPrefix);
        const { notes, isFiltered } = TransformationUtils.transformNotes(
            await this.notesService.getNotes(),
            transformationOptions,
        );
        const colorPalette = window.history.state?.colorPalette
            ? window.history.state.colorPalette
            : 'blackWhiteStyle';
        this.updateNotesDom(notes, topLevelIdPrefix, isFiltered, colorPalette);
        this.addEventListeners(topLevelIdPrefix, notes);
        this.addImportanceElements(notes, topLevelIdPrefix);

        return true;
    }
}
