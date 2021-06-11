export default class ImportanceComponent {
    constructor(handlebars, isEditable = false) {
        this.handlebars = handlebars;
        this.isEditable = isEditable;
    }

    getImportanceContext(importance, boltNumber) {
        let color = 'black';
        let visibility = 'hidden';

        if (importance && importance >= boltNumber) {
            visibility = 'visible';
        } else if (this.isEditable) {
            visibility = 'visible';
            color = 'gray';
        }

        return {
            colorAndVisibility: `${color} ${visibility}`,
            boltNumber,
            editability: this.isEditable ? 'editable' : 'read-only',
        };
    }

    adjustImportanceVisually($event) {
        console.log({ $event });
        let boltContainerElement;
        if ($event.target.classList?.value?.includes('bolt-container')) {
            boltContainerElement = $event.target;
        } else {
            boltContainerElement = $event.target.parentElement;
        }

        let newImportanceValue = parseInt(
            boltContainerElement.dataset?.boltNumber,
        );

        const previousImportanceValue = document.querySelectorAll(
            '#create-edit-note-page-container .bolt.black',
        ).length;

        if (newImportanceValue === previousImportanceValue) {
            newImportanceValue -= 1;
        }

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
        const createEditBoltsToBeBlackElements =
            createEditBoltsToBeBlackSelector
                ? document.querySelectorAll(createEditBoltsToBeBlackSelector)
                : [];

        const createEditBoltsToBeGrayElements = createEditBoltsToBeGraySelector
            ? document.querySelectorAll(createEditBoltsToBeGraySelector)
            : [];

        for (let i = 0; i < createEditBoltsToBeBlackElements.length; i++) {
            createEditBoltsToBeBlackElements[i].classList?.add('black');
            createEditBoltsToBeBlackElements[i].classList?.remove('gray');
        }

        for (let i = 0; i < createEditBoltsToBeGrayElements.length; i++) {
            console.log(createEditBoltsToBeGrayElements[i]);
            createEditBoltsToBeGrayElements[i].classList?.add('gray');
            createEditBoltsToBeGrayElements[i].classList?.remove('black');
        }
    }

    addImportanceElements(importanceList, importanceSelector, maxBolts = 5) {
        const importanceElements =
            document.querySelectorAll(importanceSelector);

        for (let i = 0; i < importanceElements.length; i++) {
            const importance = importanceList[i];
            const importanceElement = importanceElements[i];
            for (let boltNumber = 1; boltNumber <= maxBolts; boltNumber++) {
                // eslint-disable-next-line
                const importanceContainerHtml =
                    this.handlebars.templates.importance(
                        this.getImportanceContext(importance, boltNumber),
                    );
                importanceElement.innerHTML += importanceContainerHtml;
                for (let i = 0; i < importanceElement.children.length; i++) {
                    if (
                        importanceElement.children[
                            i
                        ].classList?.value?.includes('editable')
                    ) {
                        importanceElement.children[i].addEventListener(
                            'click',
                            this.adjustImportanceVisually,
                        );
                    }
                }
            }
        }
    }
}
