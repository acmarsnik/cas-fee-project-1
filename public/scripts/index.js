function navigateToEdit($event) {
    const attributes = $event?.target?.attributes;
    const noteId = attributes ? attributes['note-id'].value : null;
    alert(noteId);
    window.location.assign('/create-edit-note.html');
}

const notesContainer = document.getElementById('notes-template').innerHTML;
document.getElementById('notes-template').remove();
const notesContainerTemplate = Handlebars.compile(notesContainer);

const notes = [
    {
        id: 1,
        finishByDate: 'Nächsten Mittwoch',
        title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
        importance: 2,
        isFinished: true,
        finishDate: 'Today',
        shortDescription:
            'HTML für die note App erstellen. <br /> CSS erstellen für die note App [...]',
        fullDescription:
            'HTML für die note App erstellen. <br /> CSS erstellen für die note App <br /> and other stuff too.',
        hasArrowDown: true,
    },
    {
        id: 2,
        finishByDate: 'Heute',
        title: 'Einkaufen',
        importance: 1,
        isFinished: false,
        finishDate: null,
        shortDescription: 'Butler <br /> Eier [...]',
        fullDescription: 'Butler <br /> Eier <br /> Brot',
        hasArrowDown: true,
    },
    {
        id: 3,
        finishByDate: 'Irgendwann',
        title: 'Mami anrufen',
        importance: 0,
        isFinished: false,
        finishDate: null,
        shortDescription: null,
        fullDescription: '888 888 88 88',
        hasArrowDown: false,
    },
];

const notesContext = {
    notes: [
        {
            id: 1,
            finishByDate: 'Nächsten Mittwoch',
            title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
            importance: 2,
            isFinished: true,
            finishDate: 'Today',
            shortDescription:
                'HTML für die note App erstellen. <br /> CSS erstellen für die note App [...]',
            fullDescription:
                'HTML für die note App erstellen. <br /> CSS erstellen für die note App <br /> and other stuff too.',
            hasExpand: true,
        },
        {
            id: 2,
            finishByDate: 'Heute',
            title: 'Einkaufen',
            importance: 1,
            isFinished: false,
            finishDate: null,
            shortDescription: 'Butler <br /> Eier [...]',
            fullDescription: 'Butler <br /> Eier <br /> Brot',
            hasExpand: true,
        },
        {
            id: 3,
            finishByDate: 'Irgendwann',
            title: 'Mami anrufen',
            importance: 0,
            isFinished: false,
            finishDate: null,
            shortDescription: null,
            fullDescription: '888 888 88 88',
            hasExpand: false,
        },
    ],
};

const notesContainerHtml = notesContainerTemplate(notesContext);
document.getElementById('index-page-container').innerHTML += notesContainerHtml;

notesContext.notes.forEach((note) => {
    document
        .querySelector(`.edit-button button[note-id="${note.id}"]`)
        .addEventListener('click', navigateToEdit);
});

function toggleDescriptionsAndArrows($event) {
    const attributes = $event?.target?.attributes;
    const noteId = attributes ? attributes['note-id'].value : null;
    const arrowAndDescriptionsElements = document.querySelectorAll(
        `[id^="arrow-${noteId}"], [id^="description-${noteId}"]`
    );
    arrowAndDescriptionsElements.forEach((arrowAndDescriptionsElement) => {
        arrowAndDescriptionsElement.classList.toggle('hidden');
    });
}

const arrowElements = document.querySelectorAll(`[id^="arrow-"]`);

arrowElements.forEach((arrowElement) => {
    arrowElement.addEventListener('click', toggleDescriptionsAndArrows);
});

const bolts = [1, 2, 3, 4, 5];
const importanceElements = document.querySelectorAll('.importance');

function getHiddenString(importance, boltNumber) {
    return importance && importance >= boltNumber ? '' : ' hidden';
}

let importanceElementIndex = 0;

importanceElements.forEach((importanceElement) => {
    let importance = notesContext.notes[importanceElementIndex].importance;
    bolts.forEach((boltNumber) => {
        let hiddenString = getHiddenString(importance, boltNumber);
        importanceElement.innerHTML += `<div class="bolt-container">
                                            <div class="bolt black${hiddenString}"></div>
                                        </div>`;
    });

    importanceElementIndex++;
});
