import * as NotesService from './notes-service.js';

function navigateToEdit($event) {
    const attributes = $event?.target?.attributes;
    let queryParameters = '';
    if (attributes && attributes['note-id'] && attributes['note-id'].value) {
        const noteId = attributes['note-id'].value;
        queryParameters = `?noteId=${noteId}`;
    }
    window.location.assign(`/create-edit-note.html${queryParameters}`);
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
        `[id^="arrow-${noteId}"], [id^="description-${noteId}"]`,
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

    const arrowElements = document.querySelectorAll('[id^="arrow-"]');

    arrowElements.forEach((arrowElement) => {
        arrowElement.addEventListener('click', toggleDescriptionsAndArrows);
    });

    document
        .getElementById('create-note')
        .addEventListener('click', navigateToEdit);
}

function addImportanceElements(importanceList) {
    const maxBolts = 5;
    const importanceElements = document.querySelectorAll('.importance');

    function getHiddenString(importance, boltNumber) {
        return importance && importance >= boltNumber ? '' : ' hidden';
    }

    for (
        let importanceElementIndex = 0;
        importanceElementIndex < importanceElements.length;
        importanceElementIndex++
    ) {
        const importance = importanceList[importanceElementIndex];
        const importanceElement = importanceElements[importanceElementIndex];
        for (let boltNumber = 1; boltNumber < maxBolts; boltNumber++) {
            const hiddenString = getHiddenString(importance, boltNumber);
            importanceElement.innerHTML += `<div class="bolt-container">
                                            <div class="bolt black${hiddenString}"></div>
                                        </div>`;
        }
    }
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
            document.querySelectorAll(notesTemplateElementSelector),
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

export default function updateNotes() {
    removeTemplate();
    const notes = NotesService.getNotes();
    // eslint-disable-next-line
    const notesContainerHtml = Handlebars.templates.notes(
        getNotesContext(notes),
    );
    const indexPageContainer = document.getElementById('index-page-container');
    indexPageContainer.innerHTML += notesContainerHtml;

    addNotesEventListeners(notes);
    addImportanceElements(notes.map((note) => note.importance));
}
