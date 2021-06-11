import CreateEditNoteComponent from './create-edit-note.component.mjs';
import NotesComponent from './notes.component.mjs';
import NotesService from './notes.service.mjs';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';
import ImportanceComponent from './importance.component.mjs';
import TemplateIdUtils from './template-id.util.mjs';
import NotesState from './notes-state.mjs';
import TemplateIdPrefixes from './template-id-prefixes.mjs';

export default class IndexComponent {
    constructor(handlebars) {
        this.notesPageContainer = 'notes-page-container';
        this.createEditPageContainer = 'create-edit-note-page-container';
        this.handlebars = handlebars;
        addCompiledTemplatesToHandlebars(this.handlebars);
        this.notesImportanceComponent = new ImportanceComponent(
            this.handlebars,
        );
        this.createEditNoteImportanceComponent = new ImportanceComponent(
            this.handlebars,
            true,
        );
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
        (function (history) {
            var replaceState = history.replaceState;
            history.replaceState = function (state) {
                if (typeof history.onreplacestate == 'function') {
                    history.onreplacestate({ state: state });
                }
                // ... whatever else you want to do
                // maybe call onhashchange e.handler
                return replaceState.apply(history, arguments);
            };
        })(window.history);

        this.notesState = new NotesState(window.location.href);

        window.onreplacestate = history.onreplacestate = (e) =>
            this.showCorrectComponents(e);

        this.showCorrectComponents(this.notesState.getThisAsStateInObject());

        this.notesComponent.updateNotes(
            TemplateIdUtils.getPrefix(TemplateIdPrefixes.notes),
            TemplateIdUtils.getTopLevelPrefix(TemplateIdPrefixes.notes),
            this.notesState.sortProperty && this.notesState.sortDirection
                ? this.notesState
                : null,
        );
    }

    makeVisible(elementId) {
        document.getElementById(elementId).classList.remove('hidden');
    }

    hide(elementId) {
        document.getElementById(elementId).classList.add('hidden');
    }

    showCorrectComponents(e) {
        if (e.state?.page?.includes('edit')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getPrefix(TemplateIdPrefixes.createEditNote),
                TemplateIdUtils.getTopLevelPrefix(
                    TemplateIdPrefixes.createEditNote,
                ),
                true,
                e.state?.noteId,
            );
            this.hide(this.notesPageContainer);
            this.makeVisible(this.createEditPageContainer);
        } else if (e.state?.page?.includes('create')) {
            this.createEditNoteComponent.updateNote(
                TemplateIdUtils.getPrefix(TemplateIdPrefixes.createEditNote),
                TemplateIdUtils.getTopLevelPrefix(
                    TemplateIdPrefixes.createEditNote,
                ),
            );
            this.hide(this.notesPageContainer);
            this.makeVisible(this.createEditPageContainer);
        } else {
            this.makeVisible(this.notesPageContainer);
            this.hide(this.createEditPageContainer);
        }
    }
}
