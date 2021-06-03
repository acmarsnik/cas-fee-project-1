export default class ImportanceComponent {
    constructor(handlebars) {
        this.handlebars = handlebars;
    }

    getImportanceContext(importance, boltNumber) {
        return {
            hidden: importance && importance >= boltNumber ? '' : ' hidden',
        };
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
            }
        }
    }
}
