import Handlebars from 'handlebars/runtime.js';
import ImportanceComponent from '../../scripts/importance.component.mjs';
import addCompiledTemplatesToHandlebars from '../../templatesCompiled.mjs';
import ImportanceHelpersUtil from './helpers/importance-helpers.util.mjs';

addCompiledTemplatesToHandlebars(Handlebars);
const importanceComponent = new ImportanceComponent(Handlebars);
const showImportanceElements = false;

describe('Importance component', () => {
    it('should create 15 bolt containers when there are 3 importance containers', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const boltContainersLength =
            document.querySelectorAll('.bolt-container').length;
        expect(boltContainersLength).toBe(15);
    });
    it('should create 15 bolt elements when there are 3 importance containers', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const boltElementsLength =
            document.querySelectorAll('.bolt.black').length;
        expect(boltElementsLength).toBe(15);
    });

    it('should generate as many visible bolts as the sum of the numbers in the importance list', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
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
        expect(allVisibleBoltElementsLength).toBe(3);
    });

    it('should generate as many hidden bolts as 5 * importanceList.length - the sum of the numbers in the importance list', () => {
        const importanceList = [4, 3, 2, 1, 0, 5, 1, 2];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const allHiddenBoltElementsLength =
            document.querySelectorAll('.bolt.black.hidden').length;
        expect(allHiddenBoltElementsLength).toBe(
            importanceList.length * 5 - importanceList.reduce((a, b) => a + b),
        );
    });

    it('should generate 2 visible bolts in 1st importance container when 1st importance number is 2', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const firstImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-1"] .bolt.black:not(.hidden)',
            ).length;
        expect(firstImportanceContainerVisibleBoltElementsLength).toBe(2);
    });
    it('should generate 3 hidden bolts in 1st importance container when 1st importance number is 2', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const firstImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-1"] .bolt.black.hidden',
            ).length;
        expect(firstImportanceContainerHiddenBoltElementsLength).toBe(3);
    });
    it('should generate 1 visible bolt in 1st importance container when 2nd importance number is 1', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const secondImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-2"] .bolt.black:not(.hidden)',
            ).length;
        expect(secondImportanceContainerVisibleBoltElementsLength).toBe(1);
    });
    it('should generate 4 hidden bolts in 1st importance container when 2nd importance number is 1', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const secondImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-2"] .bolt.black.hidden',
            ).length;
        expect(secondImportanceContainerHiddenBoltElementsLength).toBe(4);
    });
    it('should generate 0 visible bolts in 3rd importance container when 3rd importance number is 0', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const thirdImportanceContainerVisibleBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-3"] .bolt.black:not(.hidden)',
            ).length;
        expect(thirdImportanceContainerVisibleBoltElementsLength).toBe(0);
    });
    it('should generate 5 hidden bolts in 3rd importance container when 3rd importance number is 1', () => {
        const importanceList = [2, 1, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const thirdImportanceContainerHiddenBoltElementsLength =
            document.querySelectorAll(
                '[id="template__notes__top-level__importance-3"] .bolt.black.hidden',
            ).length;
        expect(thirdImportanceContainerHiddenBoltElementsLength).toBe(5);
    });
});
