console.log('index.js');

function navigateToEdit($event) {
    console.log({ $event });
    const attributes = $event?.target?.attributes;
    const noteId = attributes ? attributes['note-id'].value : null;
    console.log({ noteId });
    alert(noteId);
    window.location.assign('/create-edit-note.html');
}

document
    .querySelector('.edit-button button[note-id="1"]')
    .addEventListener('click', navigateToEdit);
document
    .querySelector('.edit-button button[note-id="2"]')
    .addEventListener('click', navigateToEdit);
document
    .querySelector('.edit-button button[note-id="3"]')
    .addEventListener('click', navigateToEdit);
