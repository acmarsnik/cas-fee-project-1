const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

export default class SampleNotes {
    static project1Wireframe = [
        {
            id: 1,
            finishByDate: today,
            title: 'CAS FEE Selbststudium / Projekt Aufgabe erledigen',
            importance: 2,
            isFinished: true,
            finishedDate: today,
            shortDescription:
                'HTML für die note App erstellen. <br /> CSS erstellen für die note App [...]',
            fullDescription:
                'HTML für die note App erstellen. <br /> CSS erstellen für die note App <br /> and other stuff too.',
            hasExpand: true,
        },
        {
            id: 2,
            finishByDate: yesterday,
            title: 'Einkaufen',
            importance: 1,
            isFinished: false,
            finishedDate: yesterday,
            shortDescription: 'Butler <br /> Eier [...]',
            fullDescription: 'Butler <br /> Eier <br /> Brot',
            hasExpand: true,
        },
        {
            id: 3,
            finishByDate: twoDaysAgo,
            title: 'Mami anrufen',
            importance: 0,
            isFinished: false,
            finishedDate: twoDaysAgo,
            shortDescription: null,
            fullDescription: '888 888 88 88',
            hasExpand: false,
        },
    ];
}
