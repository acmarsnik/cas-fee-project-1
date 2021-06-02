import addImportanceElements from '../scripts/importance.mjs';
import Handlebars from 'handlebars/runtime.js';
import addCompiledTemplatesToHandlebars from '../templatesCompiled.mjs';

addCompiledTemplatesToHandlebars(Handlebars);

function addImportanceContainersToBody(numberOfImportanceContainers) {
    const allImportanceElementsDiv = document.getElementById(
        'all-test-importance-elements',
    );

    if (allImportanceElementsDiv) {
        allImportanceElementsDiv.remove();
    }

    const showImportanceElements = true;
    const display = showImportanceElements ? '' : 'display:none; ';
    document.body.insertAdjacentHTML(
        'beforeend',
        `<div id="all-test-importance-elements" style="${display}margin-top: 30px"></div>`,
    );
    for (let i = 0; i < numberOfImportanceContainers; i++) {
        document
            .getElementById('all-test-importance-elements')
            .insertAdjacentHTML(
                'beforeend',
                `<div id="template__notes__top-level__importance-${
                    i + 1
                }" class="importance"></div>`,
            );
    }
}

describe('Importance component', () => {
    it('should create 15 bolt elements when there are 3 importance containers', () => {
        const importanceList = [2, 1, 0];
        addImportanceContainersToBody(importanceList.length);
        addImportanceElements(Handlebars, importanceList);
        const importanceContainersLength = document.querySelectorAll(
            '[id^="template__notes__top-level__importance-"]',
        ).length;
        const boltContainersLength =
            document.querySelectorAll('.bolt-container').length;
        const boltElementsLength =
            document.querySelectorAll('.bolt.black').length;
        expect(importanceContainersLength).toBe(3);
        expect(boltContainersLength).toBe(15);
        expect(boltElementsLength).toBe(15);
    });

    it('should have visible bolts that match the numbers in the importance list', () => {
        const importanceList = [2, 1, 0];
        addImportanceContainersToBody(importanceList.length);
        addImportanceElements(Handlebars, importanceList);
        const allVisibleBoltElementsLength = document.querySelectorAll(
            '.bolt.black:not(.hidden)',
        ).length;
        const allHiddenBoltElementsLength =
            document.querySelectorAll('.bolt.black.hidden').length;
        expect(allVisibleBoltElementsLength).toBe(3);
        expect(allHiddenBoltElementsLength).toBe(12);
        const firstImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-1"] .bolt.black:not(.hidden)',
            ).length;
        const firstImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-1"] .bolt.black.hidden',
            ).length;
        expect(firstImportanceContainerVisibleBoltElementsLength).toBe(2);
        expect(firstImportanceContainerHiddenBoltElementsLength).toBe(3);
        const secondImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-2"] .bolt.black:not(.hidden)',
            ).length;
        const secondImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-2"] .bolt.black.hidden',
            ).length;
        expect(secondImportanceContainerVisibleBoltElementsLength).toBe(1);
        expect(secondImportanceContainerHiddenBoltElementsLength).toBe(4);
        const thirdImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-3"] .bolt.black:not(.hidden)',
            ).length;
        const thirdImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-3"] .bolt.black.hidden',
            ).length;
        expect(thirdImportanceContainerVisibleBoltElementsLength).toBe(0);
        expect(thirdImportanceContainerHiddenBoltElementsLength).toBe(5);
    });
});
