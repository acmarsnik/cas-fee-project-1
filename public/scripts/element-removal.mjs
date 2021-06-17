export default class ElementRemoval {
    static removeElementsWhereIdStartsWith(topLevelIdPrefix) {
        document.querySelectorAll(`[id^="${topLevelIdPrefix}"`).forEach((element) => {
            element.remove();
        });
    }
}
