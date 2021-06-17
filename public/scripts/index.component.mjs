/* global args */
import CreateEditNoteComponent from './create-edit-note.component.mjs';
import NotesComponent from './notes.component.mjs';
import NotesService from './notes.service.mjs';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';
import ImportanceComponent from './importance.component.mjs';
import TemplateIdUtils from './template-id.util.mjs';
import NotesState from './notes-state.mjs';
import TemplateIdPrefixes from './template-id-prefixes.mjs';
import TransformationOptions from './tranformation-options.mjs';
import GeneralDomChanges from './general-dom-changes.mjs';

export default class IndexComponent {
    constructor(handlebars) {
        this.notesPageContainer = 'notes-page-container';
        this.createEditPageContainer = 'create-edit-note-page-container';
        this.handlebars = handlebars;
        addCompiledTemplatesToHandlebars(this.handlebars);
        this.notesImportanceComponent = new ImportanceComponent(this.handlebars);
        this.createEditNoteImportanceComponent = new ImportanceComponent(this.handlebars, true);
        this.notesService = new NotesService();
        this.createEditNoteComponent = new CreateEditNoteComponent(
            this.handlebars,
            this.notesService,
            this.createEditNoteImportanceComponent,
            window,
        );
        this.notesComponent = new NotesComponent(
            this.handlebars,
            this.notesService,
            this.notesImportanceComponent,
        );
        (function setHistoryReplaceState(history) {
            const { replaceState } = history;
            history.replaceState = function setHistoryOnReplaceState(state) {
                if (typeof history.onreplacestate === 'function') {
                    history.onreplacestate({ state });
                }

                return replaceState.apply(history, ...args);
            };
        })(window.history);

        this.notesState = new NotesState(window.location.href);

        window.history.onreplacestate = (e) => this.showCorrectComponents(e);
        window.onreplacestate = (e) => this.showCorrectComponents(e);

        this.showCorrectComponents(this.notesState.getThisAsStateInObject());

        this.transformationOptions = new TransformationOptions();

        this.notesComponent.updateNotes(
            TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
            NotesState.getNotesTransformationOptions(this.notesState),
        );
    }

    showCorrectComponents(e) {
        if (e.state?.page?.includes('edit')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
                true,
                e.state?.noteId,
            );
            GeneralDomChanges.hide(this.notesPageContainer);
            GeneralDomChanges.makeVisible(this.createEditPageContainer);
        } else if (e.state?.page?.includes('create')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.createEditNote),
            );
            GeneralDomChanges.hide(this.notesPageContainer);
            GeneralDomChanges.makeVisible(this.createEditPageContainer);
        } else {
            GeneralDomChanges.makeVisible(this.notesPageContainer);
            GeneralDomChanges.hide(this.createEditPageContainer);
            this.notesComponent.updateNotes(
                TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
                NotesState.getNotesTransformationOptions(NotesState.getNewFromStateProperty(e)),
            );
        }
    }
}
