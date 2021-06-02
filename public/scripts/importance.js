function getImportanceContext(importance, boltNumber) {
    return { hidden: importance && importance >= boltNumber ? '' : ' hidden' };
}

export default function addImportanceElements(importanceList) {
    const maxBolts = 5;
    const importanceElements = document.querySelectorAll('.importance');

    for (let i = 0; i < importanceElements.length; i++) {
        const importance = importanceList[i];
        const importanceElement = importanceElements[i];
        for (let boltNumber = 1; boltNumber <= maxBolts; boltNumber++) {
            // eslint-disable-next-line
            const importanceContainerHtml = Handlebars.templates.importance(
                getImportanceContext(importance, boltNumber),
            );
            importanceElement.innerHTML += importanceContainerHtml;
        }
    }
}
