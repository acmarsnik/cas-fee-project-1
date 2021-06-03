import Handlebars from 'handlebars/runtime.js';
import ImportanceComponent from '../../scripts/importance.component.mjs';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import TestingHelpersUtil from '../helpers/testing-helpers.util.mjs';

addCompiledTemplatesToHandlebars(Handlebars);
const importanceComponent = new ImportanceComponent(Handlebars);
const showImportanceElements = true;

describe('Importance component', () => {
    it('should create 15 bolt elements when there are 3 importance containers', () => {
        const importanceList = [2, 1, 0];
        TestingHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const importanceContainersLength = document.querySelectorAll(
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
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
        TestingHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
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
