export default class ImportanceHelpersUtil {
    static addImportanceContainersToBody(
        numberOfImportanceContainers,
        showImportanceElements = false,
    ) {
        const notesAppContainerDiv = document.getElementById('notes-app');

        if (notesAppContainerDiv) {
            notesAppContainerDiv.remove();
        }

        const display = showImportanceElements ? '' : 'display:none; ';
        document.body.insertAdjacentHTML(
            'beforeend',
            `
            <div id="notes-app" class="notes-app">
                <div id="importance-page-container" class="importance-page-container" style="${display}margin-top: 30px">
                </div>
            </div>`,
        );

        for (let i = 0; i < numberOfImportanceContainers; i++) {
            document
                .getElementById('importance-page-container')
                .insertAdjacentHTML(
                    'beforeend',
                    `<div id="template__notes__top-level__importance-${
                        i + 1
                    }" class="importance">
                     </div>`,
                );
        }
    }
}
