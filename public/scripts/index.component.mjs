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

    initialize() {
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

        this.notesComponent.updateNotes(
            TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
            NotesState.getNotesTransformationOptions(this.notesState),
        );
        this.showCorrectComponents(this.notesState.getThisAsStateInObject());
    }

    showCorrectComponents(e) {
        if (e.state?.page?.includes('edit')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
                true,
                e.state?.noteId,
            );
            GeneralDomChanges.hide(this.notesPageContainerSelector);
            GeneralDomChanges.makeVisible(this.createEditPageContainerSelector);
        } else if (e.state?.page?.includes('create')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
            );
            GeneralDomChanges.hide(this.notesPageContainerSelector);
            GeneralDomChanges.makeVisible(this.createEditPageContainerSelector);
        } else {
            GeneralDomChanges.makeVisible(this.notesPageContainerSelector);
            GeneralDomChanges.hide(this.createEditPageContainerSelector);
            this.notesComponent.updateNotes(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
                NotesState.getNotesTransformationOptions(NotesState.getNewFromStateProperty(e)),
            );
        }
    }
}
