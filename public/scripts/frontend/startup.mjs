import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from './templatesCompiled.mjs';
import NotesAppComponent from './components/notes-app.component.mjs';
import TransformationOptions from './models/tranformation-options.mjs';
import ImportanceComponent from './components/importance.component.mjs';
import NotesService from './services/notes.service.mjs';
import CreateEditNoteComponent from './components/create-edit-note.component.mjs';
import NotesComponent from './components/notes.component.mjs';
import NotesState from './models/notes-state.mjs';

addCompiledTemplatesToHandlebars(Handlebars);
const notesPageContainerSelector = 'notes-page-container';
const createEditPageContainerSelector = 'create-edit-note-page-container';
const notesImportanceComponent = new ImportanceComponent(Handlebars);
const createEditNoteImportanceComponent = new ImportanceComponent(Handlebars, true);
const notesService = new NotesService('http://localhost:3000/');
const createEditNoteComponent = new CreateEditNoteComponent(
    Handlebars,
    notesService,
    createEditNoteImportanceComponent,
    window,
);
const notesComponent = new NotesComponent(Handlebars, notesService, notesImportanceComponent);
const notesState = new NotesState(window.location.href);
const transformationOptions = new TransformationOptions();

const notesAppComponent = new NotesAppComponent(
    notesPageContainerSelector,
    createEditPageContainerSelector,
    notesComponent,
    createEditNoteComponent,
    notesState,
    transformationOptions,
);

notesAppComponent.initialize();
