import Handlebars from 'handlebars/runtime.js';
import CreateEditNoteComponent from './create-edit-note.component.mjs';
import NotesComponent from './notes.component.mjs';
import NotesService from './notes.service.mjs';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';
import ImportanceComponent from './importance.component.mjs';
import TemplateIdUtils from './template-id.util.mjs';

function makeVisible(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function hide(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

addCompiledTemplatesToHandlebars(Handlebars);

const templateIdPrefixes = {
    createEditNote: 'create-edit-note',
    importance: 'importance',
    notes: 'notes',
};
const notesImportanceComponent = new ImportanceComponent(Handlebars);
const createEditNoteImportanceComponent = new ImportanceComponent(
    Handlebars,
    true,
);
const notesService = new NotesService();
const createEditNoteComponent = new CreateEditNoteComponent(
    Handlebars,
    notesService,
    createEditNoteImportanceComponent,
    window,
);
const notesComponent = new NotesComponent(
    Handlebars,
    notesService,
    notesImportanceComponent,
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

function showCorrectComponents(e) {
    if (e.state?.includes('edit')) {
        createEditNoteComponent.updateNote(
            TemplateIdUtils.getPrefix(templateIdPrefixes.createEditNote),
            TemplateIdUtils.getTopLevelPrefix(
                templateIdPrefixes.createEditNote,
            ),
            true,
            parseInt(e.state.replace('edit-note-', '')),
        );
        hide('index-page-container');
        makeVisible('create-edit-note-page-container');
    } else if (e.state?.includes('create')) {
        createEditNoteComponent.updateNote(
            TemplateIdUtils.getPrefix(templateIdPrefixes.createEditNote),
            TemplateIdUtils.getTopLevelPrefix(
                templateIdPrefixes.createEditNote,
            ),
        );
        hide('index-page-container');
        makeVisible('create-edit-note-page-container');
    } else {
        makeVisible('index-page-container');
        hide('create-edit-note-page-container');
    }
}

window.onreplacestate = history.onreplacestate = (e) =>
    showCorrectComponents(e);

const stateObject = { state: '' };

if (window.location.href.includes('noteId')) {
    stateObject.state = `edit-note-${window.location.href.split('=')[1]}`;
} else if (window.location.href.includes('create')) {
    stateObject.state = 'create-note';
}

showCorrectComponents(stateObject);

notesComponent.updateNotes(
    TemplateIdUtils.getPrefix(templateIdPrefixes.notes),
    TemplateIdUtils.getTopLevelPrefix(templateIdPrefixes.notes),
);