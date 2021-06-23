import Note from './note.mjs';

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

const note1 = new Note(
    null,
    'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
    2,

    'HTML für die note App erstellen.\nCSS erstellen für die note App \nand other stuff too.',
    1,
    null,
    twoDaysAgo.toISOString(),
);
const note2 = new Note(
    today.toISOString(),
    'Einkaufen',
    1,

    'Butler \nEier \nBrot',
    2,
    yesterday.toISOString(),
    yesterday.toISOString(),
);
const note3 = new Note(
    yesterday.toISOString(),
    'Mami anrufen',
    0,
    '888 888 88 88',
    3,
    today.toISOString(),
    today.toISOString(),
);
const notes = [note1, note2, note3];

export default notes;
