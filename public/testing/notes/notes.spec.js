import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import NotesHelpersUtil from './helpers/notes-helpers.util.mjs';
import SampleNotes from './mocks/notes.mock.data.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

const showIndexPageContainer = false;

describe('Notes component', () => {
    it('should have 13 top level elements for each note (13 * 3 = 39) & 10 other top level elements (39 + 10 = 49)', () => {
        const notesComponent = NotesHelpersUtil.getNotesComponent(
            Handlebars,
            SampleNotes.project1Wireframe,
        );
        NotesHelpersUtil.addIndexPageContainer(showIndexPageContainer);
        notesComponent.updateNotes(
            'template__notes',
            'template__notes__top-level__',
        );
        const notesTopLevelElementsLength = document.querySelectorAll(
            '[id^="template__notes__top-level__"]',
        ).length;
        expect(notesTopLevelElementsLength).toBe(49);
    });
    it('should create 1 importance container per item the in importance list', () => {
        const notesComponent = NotesHelpersUtil.getNotesComponent(
            Handlebars,
            SampleNotes.project1Wireframe,
        );
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
