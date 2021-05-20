function navigateToEdit($event) {
    const attributes = $event?.target?.attributes;
    const noteId = attributes ? attributes['note-id'].value : null;
    alert(noteId);
    window.location.assign('/create-edit-note.html');
}

const notesContainer = document.getElementById('notes-template').innerHTML;
document.getElementById('notes-template').remove();
const notesContainerTemplate = Handlebars.compile(notesContainer);

const notesContext = {
    notes: [
        {
            id: 1,
            finishByDate: 'Nächsten Mittwoch',
            title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
            importance: 2,
            isFinished: true,
            finishDate: 'Today',
            description:
                'HTML für die note App erstellen. <br /> CSS erstellen für die note App [...]',
            hasArrowDown: true,
        },
        {
            id: 2,
            finishByDate: 'Heute',
            title: 'Einkaufen',
            importance: 1,
            isFinished: false,
            finishDate: null,
            description: 'Butler <br /> Eier [...]',
            hasArrowDown: true,
        },
        {
            id: 3,
            finishByDate: 'Irgendwann',
            title: 'Mami anrufen',
            importance: 0,
            isFinished: false,
            finishDate: null,
            description: '888 888 88 88',
            hasArrowDown: false,
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

const bolts = [1, 2, 3, 4, 5];
const importanceElements = document.querySelectorAll('.importance');
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
