import ImportanceDomUtils from '../utils/components/importance-dom.util.mjs';

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

    addImportanceElements(importanceList, importanceSelector, maxBolts = 5) {
        const importanceElements = document.querySelectorAll(importanceSelector);

        for (let i = 0; i < importanceElements.length; i++) {
            const importance = importanceList[i];
            const importanceElement = importanceElements[i];
            for (let boltNumber = 1; boltNumber <= maxBolts; boltNumber++) {
                // eslint-disable-next-line
                const importanceContainerHtml = this.handlebars.templates.importance(
                    this.getImportanceContext(importance, boltNumber),
                );
                importanceElement.innerHTML += importanceContainerHtml;
                for (let j = 0; j < importanceElement.children.length; j++) {
                    if (importanceElement.children[j].classList?.value?.includes('editable')) {
                        importanceElement.children[j].addEventListener(
                            'click',
                            ImportanceDomUtils.adjustImportanceColorsOnClick,
                        );
                    }
                }
            }
        }
    }
}
