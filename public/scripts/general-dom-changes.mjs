export default class GeneralDomChanges {
    static removeElementsWhereIdStartsWith(topLevelIdPrefix) {
        document.querySelectorAll(`[id^="${topLevelIdPrefix}"`).forEach((element) => {
            element.remove();
        });
    }

    static makeVisible(elementId) {
        document.getElementById(elementId).classList.remove('hidden');
    }

    static hide(elementId) {
        document.getElementById(elementId).classList.add('hidden');
    }
}
