import TemplateIdUtils from '../utils/general/template-id.util.mjs';
import NotesState from '../models/notes-state.mjs';
import GeneralDomUtils from '../utils/general/general-dom.util.mjs';

export default class NotesAppComponent {
    constructor(
        notesPageContainerSelector,
        createEditPageContainerSelector,
        notesComponent,
        createEditNoteComponent,
        notesState,
        transformationOptions,
    ) {
        this.notesPageContainerSelector = notesPageContainerSelector;
        this.createEditPageContainerSelector = createEditPageContainerSelector;
        this.notesComponent = notesComponent;
        this.createEditNoteComponent = createEditNoteComponent;
        this.notesState = notesState;
        this.transformationOptions = transformationOptions;
    }

    async initialize() {
        (function setHistoryReplaceState(history) {
            const { replaceState } = history;
            history.replaceState = function setHistoryOnReplaceState(state) {
                if (typeof history.onreplacestate === 'function') {
                    history.onreplacestate({ state });
                }
                /* eslint-disable prefer-rest-params */
                return replaceState.apply(history, arguments);
            };
        })(window.history);

        window.history.onreplacestate = (e) => this.showCorrectComponents(e);
        window.onreplacestate = (e) => this.showCorrectComponents(e);

        const updateNotesFinished = await this.notesComponent.updateNotes(
            TemplateIdUtils.getNotesTopLevelPrefix(),
            NotesState.getNotesTransformationOptions(this.notesState),
        );
        const showCorrectComponentsFinished = await this.showCorrectComponents(
            this.notesState.getThisAsStateInObject(),
        );

        return { updateNotesFinished, showCorrectComponentsFinished };
    }

    async showCorrectComponents(e) {
        let finished = false;

        if (e.state?.page?.includes('edit')) {
            finished = await this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getCreateEditNoteTopLevelPrefix(),
                true,
                e.state?.noteId,
            );
            GeneralDomUtils.hide(this.notesPageContainerSelector);
            GeneralDomUtils.makeVisible(this.createEditPageContainerSelector);
        } else if (e.state?.page?.includes('create')) {
            finished = await this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getCreateEditNoteTopLevelPrefix(),
            );
            GeneralDomUtils.hide(this.notesPageContainerSelector);
            GeneralDomUtils.makeVisible(this.createEditPageContainerSelector);
        } else {
            GeneralDomUtils.makeVisible(this.notesPageContainerSelector);
            GeneralDomUtils.hide(this.createEditPageContainerSelector);
            finished = await this.notesComponent.updateNotes(
                TemplateIdUtils.getNotesTopLevelPrefix(),
                NotesState.getNotesTransformationOptions(NotesState.getNewFromStateProperty(e)),
            );
        }

        return finished;
    }
}
