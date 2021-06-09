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

function getParameterByName(name, url = window.location.href) {
    console.log({ url });
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
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

console.log({ window });

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

window.onreplacestate = history.onreplacestate = function (e) {
    console.log({ e });
    console.log({ history: window.history });
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

    console.log('location changed!');
};

notesComponent.updateNotes(
    TemplateIdUtils.getPrefix(templateIdPrefixes.notes),
    TemplateIdUtils.getTopLevelPrefix(templateIdPrefixes.notes),
);

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i = 0;

    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    return params;

    // reload page with new params
    // document.location.search = params;
}

console.log({ qp: insertParam('id', 25) });
