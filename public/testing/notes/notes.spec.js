import Handlebars from 'handlebars/runtime.js';
import NotesComponent from '../../scripts/notes.component.mjs';
import NotesMockService from './mocks/notes.mock.service.mjs';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import ImportanceComponent from '../../scripts/importance.component.mjs';
import TestingHelpersUtil from '../helpers/testing-helpers.util.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

const importanceComponent = new ImportanceComponent(Handlebars);
const notesMockService = new NotesMockService();
const notesComponent = new NotesComponent(
    Handlebars,
    notesMockService,
    importanceComponent,
);
const showIndexPageContainer = false;

describe('Notes component', () => {
    it('should do something', () => {
        TestingHelpersUtil.addIndexPageContainer(showIndexPageContainer);
        notesComponent.updateNotes(
            'template__notes',
            'template__notes__top-level__',
        );
        expect(true).toBe(true);
    });
});
