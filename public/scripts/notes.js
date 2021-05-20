import * as NotesService from './notes-service.js';

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

function getNotesContext(notes) {
    return {
        notes,
    };
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

function addNotesEventListeners(notes) {
    notes.forEach((note) => {
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

function addImportanceElements(importanceList) {
    const bolts = [1, 2, 3, 4, 5];
    const importanceElements = document.querySelectorAll('.importance');

    function getHiddenString(importance, boltNumber) {
        return importance && importance >= boltNumber ? '' : ' hidden';
    }

    let importanceListIndex = 0;

    importanceElements.forEach((importanceElement) => {
        let importance = importanceList[importanceListIndex].importance;
        bolts.forEach((boltNumber) => {
            let hiddenString = getHiddenString(importance, boltNumber);
            importanceElement.innerHTML += `<div class="bolt-container">
                                            <div class="bolt black${hiddenString}"></div>
                                        </div>`;
        });

        importanceListIndex++;
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

export function updateNotes() {
    removeTemplate();
    const notes = NotesService.getNotes();
    const notesContainerHtml = Handlebars.templates.notes(
        getNotesContext(notes)
    );
    document.getElementById('index-page-container').innerHTML +=
        notesContainerHtml;

    addNotesEventListeners(notes);
    addImportanceElements(notes.map((note) => note.importance));
}
