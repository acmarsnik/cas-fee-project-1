import Handlebars from 'handlebars/runtime.js';
import NotesComponent from '../../scripts/notes.component.mjs';
import NotesMockService from './mocks/notes.mock.service.mjs';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import ImportanceComponent from '../../scripts/importance.component.mjs';
import NotesHelpersUtil from './helpers/notes-helpers.util.mjs';

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
    it('should have 39 top level elements', () => {
        NotesHelpersUtil.addIndexPageContainer(showIndexPageContainer);
        notesComponent.updateNotes(
            'template__notes',
            'template__notes__top-level__',
        );
        const notesTopLevelElementsLength = document.querySelectorAll(
            '[id^="template__notes__top-level__"]',
        ).length;
        expect(notesTopLevelElementsLength).toBe(39);
    });
    it('should create 1 importance container per item the in importance list', () => {
        NotesHelpersUtil.addIndexPageContainer(showIndexPageContainer);
        notesComponent.updateNotes(
            'template__notes',
            'template__notes__top-level__',
        );
        const importanceContainersLength = document.querySelectorAll(
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        ).length;
        expect(importanceContainersLength).toBe(3);
    });
});
