import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';
import IndexComponent from './index.component.mjs';
import TransformationOptions from './tranformation-options.mjs';
import ImportanceComponent from './importance.component.mjs';
import NotesService from './notes.service.mjs';
import CreateEditNoteComponent from './create-edit-note.component.mjs';
import NotesComponent from './notes.component.mjs';
import NotesState from './notes-state.mjs';
import notes from './notes.data.mjs';

addCompiledTemplatesToHandlebars(Handlebars);
const notesPageContainerSelector = 'notes-page-container';
const createEditPageContainerSelector = 'create-edit-note-page-container';
const notesImportanceComponent = new ImportanceComponent(Handlebars);
const createEditNoteImportanceComponent = new ImportanceComponent(Handlebars, true);
const notesService = new NotesService(notes);
const createEditNoteComponent = new CreateEditNoteComponent(
    Handlebars,
    notesService,
    createEditNoteImportanceComponent,
    window,
);
const notesComponent = new NotesComponent(Handlebars, notesService, notesImportanceComponent);
const notesState = new NotesState(window.location.href);
const transformationOptions = new TransformationOptions();

const indexComponent = new IndexComponent(
    notesPageContainerSelector,
    createEditPageContainerSelector,
    notesComponent,
    createEditNoteComponent,
    notesState,
    transformationOptions,
);

indexComponent.initialize();
