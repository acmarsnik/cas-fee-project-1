import TemplateIdUtils from './template-id.util.mjs';
import NotesState from './notes-state.mjs';
import TemplateIdPrefixes from './template-id-prefixes.mjs';
import GeneralDomChanges from './general-dom-changes.mjs';

export default class IndexComponent {
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
            TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
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
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
                true,
                e.state?.noteId,
            );
            GeneralDomChanges.hide(this.notesPageContainerSelector);
            GeneralDomChanges.makeVisible(this.createEditPageContainerSelector);
        } else if (e.state?.page?.includes('create')) {
            finished = await this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
            );
            GeneralDomChanges.hide(this.notesPageContainerSelector);
            GeneralDomChanges.makeVisible(this.createEditPageContainerSelector);
        } else {
            GeneralDomChanges.makeVisible(this.notesPageContainerSelector);
            GeneralDomChanges.hide(this.createEditPageContainerSelector);
            finished = await this.notesComponent.updateNotes(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
                NotesState.getNotesTransformationOptions(NotesState.getNewFromStateProperty(e)),
            );
        }

        return finished;
    }
}
