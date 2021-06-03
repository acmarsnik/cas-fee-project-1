export default class NotesHelpersUtil {
    static addIndexPageContainer(showIndexPageContainer = false) {
        const indexPageContainerDiv = document.getElementById(
            'index-page-container',
        );

        if (indexPageContainerDiv) {
            indexPageContainerDiv.remove();
        }

        const display = showIndexPageContainer ? '' : 'display:none; ';
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div id="index-page-container" class="index-page-container" style="${display}margin-top: 30px">
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
            </div>`,
        );
    }
}
