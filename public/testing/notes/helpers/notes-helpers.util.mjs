import NotesComponent from '../../../scripts/notes.component.mjs';
import NotesMockService from '../mocks/notes.mock.service.mjs';
import ImportanceComponent from '../../../scripts/importance.component.mjs';

export default class NotesHelpersUtil {
    static addIndexPageContainer(showIndexPageContainer = false) {
        const notesAppContainerDiv = document.getElementById('notes-app');

        if (notesAppContainerDiv) {
            notesAppContainerDiv.remove();
        }

        const display = showIndexPageContainer ? '' : 'display:none; ';
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div id="notes-app" class="notes-app">
                <div id="index-page-container" class="index-page-container" style="${display}margin-top: 30px">
                    <div id="create-note" class="create-note">
                        <button>Create new Note</button>
                    </div>
                    <div class="space-between-create-note-and-color-palette"></div>
                    <div class="color-palette-selector">
                        <select name="colorPalette">
                            <option value="blackWhiteStyle">BlackWhite-Style</option>
                            <option value="darkMode">Dark Mode</option>
                            <option value="rainbow">Rainbow</option>
                        </select>
                    </div>
                    <div class="by-finish-date">
                        <button>By finish Date</button>
                    </div>
                    <div class="by-created-date">
                        <button>By created Date</button>
                    </div>
                    <div class="by-importance">
                        <button>By Importance</button>
                    </div>
                    <div class="show-finished">
                        <button>Show finished</button>
                    </div>
                </div>
            </div>`,
        );
    }

    static getNotesComponent(handlebars, notes = []) {
        const importanceComponent = new ImportanceComponent(handlebars);
        const notesMockService = new NotesMockService(notes);
        return new NotesComponent(
            handlebars,
            notesMockService,
            importanceComponent,
        );
    }
}
