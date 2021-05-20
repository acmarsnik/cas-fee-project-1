import * as NotesService from './notes-service.js';

const notesTemplate = document.getElementById('notes-template').innerHTML;

function navigateToEdit($event) {
    const attributes = $event?.target?.attributes;
    let noteId = null;
    if (attributes && attributes['note-id']) {
        noteId = attributes['note-id'].value;
    }
    window.location.assign(
        `/create-edit-note.html${noteId ? '?noteId=' + noteId : ''}`
    );
}

function getNotesContext() {
    return {
        notes: NotesService.getNotes(),
    };
}

function addNotesEventListeners(notesContext) {
    notesContext.notes.forEach((note) => {
        document
            .querySelector(`.edit-button button[note-id="${note.id}"]`)
            .addEventListener('click', navigateToEdit);
    });

    const arrowElements = document.querySelectorAll(`[id^="arrow-"]`);

    arrowElements.forEach((arrowElement) => {
        arrowElement.addEventListener('click', toggleDescriptionsAndArrows);
    });

    document
        .getElementById('create-note')
        .addEventListener('click', navigateToEdit);
}

function addImportanceElements(notesContext) {
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
}

function removeAllNotesTemplateElements() {
    const notesTemplateElementSelectors = [
        '.finish-by-date',
        '.title-padding-left',
        '.title',
        '.space-between-title-and-importance',
        '.importance',
        '.importance-padding-right',
        '.finished',
        '.description-padding-left',
        '.description',
        '.space-between-description-and-arrow',
        '.arrow-container',
        '.arrow-padding-right',
        '.move-edit-down',
        '.edit-button',
    ];
    const notesTemplateElements = [];
    notesTemplateElementSelectors.forEach((notesTemplateElementSelector) => {
        notesTemplateElements.push(
            document.querySelectorAll(notesTemplateElementSelector)
        );
    });
    notesTemplateElements.forEach((notesTemplateElement) => {
        notesTemplateElement.forEach((item) => {
            item.remove();
        });
    });
}

function removeTemplate() {
    const notesTemplateElement = document.getElementById('notes-template');
    if (document.body.contains(notesTemplateElement)) {
        document.getElementById('notes-template').remove();
    } else {
        removeAllNotesTemplateElements();
    }
}

function updateNotes(notesTemplate) {
    removeTemplate();
    const notesContainerTemplate = Handlebars.compile(notesTemplate);

    const notesContext = getNotesContext();

    const notesContainerHtml = notesContainerTemplate(getNotesContext());
    document.getElementById('index-page-container').innerHTML +=
        notesContainerHtml;

    addNotesEventListeners(notesContext);
    addImportanceElements(notesContext);
}

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

updateNotes(notesTemplate);
