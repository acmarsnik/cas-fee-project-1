import * as NotesService from './notes-service.js';
import getTopLevelIdPrefix from './top-level.js';
import addImportanceElements from './importance.js';

function navigateToEdit($event) {
    const attributes = $event?.target?.attributes;
    let queryParameters = '';
    if (attributes && attributes['note-id'] && attributes['note-id'].value) {
        const noteId = attributes['note-id'].value;
        queryParameters = `?noteId=${noteId}`;
    }
    window.location.assign(`/create-edit-note.html${queryParameters}`);
}

function removeAllNotesTemplateElements(notesTemplateIdPrefix) {
    document
        .querySelectorAll(
            `[id^="${getTopLevelIdPrefix(notesTemplateIdPrefix)}"`,
        )
        .forEach((notesTemplateElement) => {
            notesTemplateElement.remove();
        });
}

function getNotesContext(notes, templateIdPrefix) {
    return {
        notes,
        idPrefixes: {
            template: templateIdPrefix,
            topLevel: getTopLevelIdPrefix(),
        },
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

export default function updateNotes() {
    const notesTemplateIdPrefix = 'template__notes__';
    removeAllNotesTemplateElements(notesTemplateIdPrefix);
    const notes = NotesService.getNotes();
    // eslint-disable-next-line
    const notesContainerHtml = Handlebars.templates.notes(
        getNotesContext(notes, notesTemplateIdPrefix),
    );
    const indexPageContainer = document.getElementById('index-page-container');
    indexPageContainer.innerHTML += notesContainerHtml;

    addNotesEventListeners(notes);
    addImportanceElements(notes.map((note) => note.importance));
}
