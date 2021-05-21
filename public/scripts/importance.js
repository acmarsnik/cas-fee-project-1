function getImportanceContext(importance, boltNumber) {
    return { hidden: importance && importance >= boltNumber ? '' : ' hidden' };
}

export default function addImportanceElements(importanceList) {
    const maxBolts = 5;
    const importanceElements = document.querySelectorAll('.importance');

    for (
        let importanceElementIndex = 0;
        importanceElementIndex < importanceElements.length;
        importanceElementIndex++
    ) {
        const importance = importanceList[importanceElementIndex];
        const importanceElement = importanceElements[importanceElementIndex];
        for (let boltNumber = 1; boltNumber < maxBolts; boltNumber++) {
            // eslint-disable-next-line
            const importanceContainerHtml = Handlebars.templates.importance(
                getImportanceContext(importance, boltNumber),
            );
            importanceElement.innerHTML += importanceContainerHtml;
        }
    }
}
