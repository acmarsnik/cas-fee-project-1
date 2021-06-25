import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from './templatesCompiled.mjs';
import NotesAppComponent from './components/notes-app.component.mjs';
import TransformationOptions from './models/tranformation-options.mjs';
import ImportanceComponent from './components/importance.component.mjs';
import NotesService from './services/notes.service.mjs';
import CreateEditNoteComponent from './components/create-edit-note.component.mjs';
import NotesComponent from './components/notes.component.mjs';
import NotesState from './models/notes-state.mjs';
import ApiUtils from './utils/api/api.util.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

const notesAppComponent = new NotesAppComponent(
    'notes-page-container',
    'create-edit-note-page-container',
    new NotesComponent(
        Handlebars,
        new NotesService('http://localhost:3000/', new ApiUtils()),
        new ImportanceComponent(Handlebars),
    ),
    new CreateEditNoteComponent(
        Handlebars,
        new NotesService('http://localhost:3000/', new ApiUtils()),
        new ImportanceComponent(Handlebars, true),
        window,
    ),
    new NotesState(window.location.href),
    new TransformationOptions(),
);

notesAppComponent.initialize();
