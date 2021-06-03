import Handlebars from 'handlebars/runtime.js';
import NotesComponent from './notes.component.mjs';
import NotesService from './notes.service.mjs';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';
import ImportanceComponent from './importance.component.mjs';
import TemplateIdUtils from './template-id.util.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

const templateIdPrefixes = {
    createEditNote: 'create-edit-note',
    importance: 'importance',
    notes: 'notes',
};
const importanceComponent = new ImportanceComponent(Handlebars);
const notesService = new NotesService();
const notesComponent = new NotesComponent(
    Handlebars,
    notesService,
    importanceComponent,
);

notesComponent.updateNotes(
    TemplateIdUtils.getPrefix(templateIdPrefixes.notes),
    TemplateIdUtils.getTopLevelPrefix(templateIdPrefixes.notes),
);
