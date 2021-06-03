export default class ImportanceHelpersUtil {
    static addImportanceContainersToBody(
        numberOfImportanceContainers,
        showImportanceElements = false,
    ) {
        const allImportanceElementsDiv = document.getElementById(
            'all-test-importance-elements',
        );

        if (allImportanceElementsDiv) {
            allImportanceElementsDiv.remove();
        }

        const display = showImportanceElements ? '' : 'display:none; ';
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div id="all-test-importance-elements" style="${display}margin-top: 30px">
             </div>`,
        );
        for (let i = 0; i < numberOfImportanceContainers; i++) {
            document
                .getElementById('all-test-importance-elements')
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
