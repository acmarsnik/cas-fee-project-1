import Handlebars from 'handlebars/runtime.js';
import ImportanceComponent from '../../scripts/frontend/components/importance.component.mjs';
import addCompiledTemplatesToHandlebars from '../../scripts/frontend/templatesCompiled.mjs';
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
        const boltContainersLength = document.querySelectorAll('.bolt-container').length;
        expect(boltContainersLength).toBe(15);
    });
    it('should create 0 bolt elements when there are 0 importance containers', () => {
        const importanceList = [];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const boltElementsLength = document.querySelectorAll('.bolt.black').length;
        expect(boltElementsLength).toBe(0);
    });

    it('should generate as many visible bolts as the sum of the numbers in the importance list', () => {
        const importanceList = [1, 5, 2, 4, 3, 3, 5, 4, 3, 2, 1, 2, 3, 4, 5];
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
        const importanceListSum = importanceList.reduce((a, b) => a + b);
        expect(allVisibleBoltElementsLength).toBe(importanceListSum);
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
        const allHiddenBoltElementsLength = document.querySelectorAll('.bolt.black.hidden').length;
        const importanceListSum = importanceList.reduce((a, b) => a + b);
        expect(allHiddenBoltElementsLength).toBe(importanceList.length * 5 - importanceListSum);
    });

    it('should generate 0 visible bolts in 1st importance container when 1st importance number is 0', () => {
        const importanceList = [0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const firstImportanceContainerVisibleBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-1"] .bolt.black:not(.hidden)',
        ).length;
        expect(firstImportanceContainerVisibleBoltElementsLength).toBe(0);
    });
    it('should generate 5 hidden bolts in 1st importance container when 1st importance number is 0', () => {
        const importanceList = [0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const firstImportanceContainerHiddenBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-1"] .bolt.black.hidden',
        ).length;
        expect(firstImportanceContainerHiddenBoltElementsLength).toBe(5);
    });
    it('should generate 3 visible bolt in 2nd importance container when 2nd importance number is 3', () => {
        const importanceList = [5, 3, 0, 1, 2];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const secondImportanceContainerVisibleBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-2"] .bolt.black:not(.hidden)',
        ).length;
        expect(secondImportanceContainerVisibleBoltElementsLength).toBe(3);
    });
    it('should generate 2 hidden bolts in 1st importance container when 2nd importance number is 3', () => {
        const importanceList = [1, 3, 4, 4, 0];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const secondImportanceContainerHiddenBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-2"] .bolt.black.hidden',
        ).length;
        expect(secondImportanceContainerHiddenBoltElementsLength).toBe(2);
    });
    it('should generate 5 visible bolts in last importance container when last importance number is 5', () => {
        const importanceList = [1, 2, 3, 4, 2, 3, 2, 4, 0, 5, 1, 2, 3, 5];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const thirdImportanceContainerVisibleBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-14"] .bolt.black:not(.hidden)',
        ).length;
        expect(thirdImportanceContainerVisibleBoltElementsLength).toBe(5);
    });
    it('should generate 0 hidden bolts in last importance container when last importance number is 5', () => {
        const importanceList = [0, 5];
        ImportanceHelpersUtil.addImportanceContainersToBody(
            importanceList.length,
            showImportanceElements,
        );
        importanceComponent.addImportanceElements(
            importanceList,
            '[id^="template__notes__top-level__importance-"]:not([id*="padding"]).importance',
        );
        const thirdImportanceContainerHiddenBoltElementsLength = document.querySelectorAll(
            '[id="template__notes__top-level__importance-2"] .bolt.black.hidden',
        ).length;
        expect(thirdImportanceContainerHiddenBoltElementsLength).toBe(0);
    });
});
