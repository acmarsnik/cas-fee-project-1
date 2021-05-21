const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

// eslint-disable-next-line
export const notes = [
    {
        id: 1,
        finishByDate: 'Nächsten Mittwoch',
        title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
        importance: 2,
        isFinished: true,
        finishedDate: today,
        finishedDateDisplay: today.toDateString(),
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
        finishedDate: yesterday,
        finishedDateDisplay: yesterday.toDateString(),
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
        finishedDate: twoDaysAgo.toDateString(),
        finishedDateDisplay: twoDaysAgo.toDateString(),
        shortDescription: null,
        fullDescription: '888 888 88 88',
        hasExpand: false,
    },
];
