const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

const notes = [
    {
        id: 1,
        finishByDate: null,
        createdDate: twoDaysAgo,
        title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
        importance: 2,
        isFinished: true,
        finishedDate: twoDaysAgo,
        shortDescription:
            'HTML für die note App erstellen.\nCSS erstellen für die note App [...]',
        fullDescription:
            'HTML für die note App erstellen.\nCSS erstellen für die note App \nand other stuff too.',
        hasExpand: true,
    },
    {
        id: 2,
        finishByDate: today,
        createdDate: yesterday,
        title: 'Einkaufen',
        importance: 1,
        isFinished: false,
        finishedDate: yesterday,
        shortDescription: 'Butler \nEier [...]',
        fullDescription: 'Butler \nEier \nBrot',
        hasExpand: true,
    },
    {
        id: 3,
        finishByDate: yesterday,
        createdDate: today,
        title: 'Mami anrufen',
        importance: 0,
        isFinished: false,
        finishedDate: today,
        shortDescription: null,
        fullDescription: '888 888 88 88',
        hasExpand: false,
    },
];

export default notes;
