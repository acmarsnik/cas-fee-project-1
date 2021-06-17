export default class ImportanceDomChanges {
    static adjustImportanceColorsOnClick($event) {
        const newImportanceValue = ImportanceDomChanges.getNewImportanceValue($event);
        const { createEditBoltsToBeBlackElements, createEditBoltsToBeGrayElements } =
            ImportanceDomChanges.getCreateEditBoltsToBeElements(newImportanceValue);
        ImportanceDomChanges.adjustElementColors(createEditBoltsToBeBlackElements, 'black', 'gray');
        ImportanceDomChanges.adjustElementColors(createEditBoltsToBeGrayElements, 'gray', 'black');
    }

    static getNewImportanceValue($event) {
        const boltContainerElement = ImportanceDomChanges.getBoltContainerElement($event);
        let newImportanceValue = parseInt(boltContainerElement.dataset?.boltNumber, 10);
        const previousImportanceValue = ImportanceDomChanges.getPreviousImportanceValue();

        if (newImportanceValue === previousImportanceValue) {
            newImportanceValue -= 1;
        }

        return newImportanceValue;
    }

    static getBoltContainerElement($event) {
        let boltContainerElement;

        if ($event.target.classList?.value?.includes('bolt-container')) {
            boltContainerElement = $event.target;
        } else {
            boltContainerElement = $event.target.parentElement;
        }

        return boltContainerElement;
    }

    static getPreviousImportanceValue() {
        return document.querySelectorAll('#create-edit-note-page-container .bolt.black').length;
    }

    static adjustElementColors(elements, classToAdd, classToRemove) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList?.add(classToAdd);
            elements[i].classList?.remove(classToRemove);
        }
    }

    static getCreateEditBoltsToBeElements(newImportanceValue) {
        let createEditBoltsToBeBlackSelector;
        let createEditBoltsToBeGraySelector;
        const commaSpace = ', ';

        for (let i = 1; i <= 5; i++) {
            const createEditBoltSelector = `#create-edit-note-page-container .bolt-container[data-bolt-number="${i}"] .bolt`;

            if (i <= newImportanceValue) {
                if (i !== 1) {
                    createEditBoltsToBeBlackSelector += commaSpace;
                }
                if (i === 1) {
                    createEditBoltsToBeBlackSelector = createEditBoltSelector;
                } else {
                    createEditBoltsToBeBlackSelector += createEditBoltSelector;
                }
            } else {
                if (i !== newImportanceValue + 1) {
                    createEditBoltsToBeGraySelector += commaSpace;
                }
                if (i === newImportanceValue + 1) {
                    createEditBoltsToBeGraySelector = createEditBoltSelector;
                } else {
                    createEditBoltsToBeGraySelector += createEditBoltSelector;
                }
            }
        }

        const createEditBoltsToBeBlackElements = createEditBoltsToBeBlackSelector
            ? document.querySelectorAll(createEditBoltsToBeBlackSelector)
            : [];
        const createEditBoltsToBeGrayElements = createEditBoltsToBeGraySelector
            ? document.querySelectorAll(createEditBoltsToBeGraySelector)
            : [];

        return {
            createEditBoltsToBeBlackElements,
            createEditBoltsToBeGrayElements,
        };
    }
}
