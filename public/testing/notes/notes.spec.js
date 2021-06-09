import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import NotesHelpersUtil from './helpers/notes-helpers.util.mjs';
import SampleNotes from './mocks/notes.mock.data.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

const showIndexPageContainer = false;

describe('Notes component', () => {
    it('should have 13 top level elements for each note (13 * 3 = 39)', () => {
        const notesComponent = NotesHelpersUtil.getNotesComponent(Handlebars, [
            {
                id: 1,
                finishByDate: 'Nächsten Mittwoch',
                title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
                importance: 2,
                isFinished: true,
                finishedDate: today,
                finishedDateDisplay: today.toDateString(),
                shortDescription:
                    'HTML für die note App erstellen. <br /> CSS erstellen für die note App [...]',
                fullDescription:
                    'HTML für die note App erstellen. <br /> CSS erstellen für die note App <br /> and other stuff too.',
                hasExpand: true,
            },
            {
                id: 2,
                finishByDate: 'Heute',
                title: 'Einkaufen',
                importance: 1,
                isFinished: false,
                finishedDate: yesterday,
                finishedDateDisplay: yesterday.toDateString(),
                shortDescription: 'Butler <br /> Eier [...]',
                fullDescription: 'Butler <br /> Eier <br /> Brot',
                hasExpand: true,
            },
            {
                id: 3,
                finishByDate: 'Irgendwann',
                title: 'Mami anrufen',
                importance: 0,
                isFinished: false,
                finishedDate: twoDaysAgo.toDateString(),
                finishedDateDisplay: twoDaysAgo.toDateString(),
                shortDescription: null,
                fullDescription: '888 888 88 88',
                hasExpand: false,
            },
        ]);
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
