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

    static changeColorTheme($event) {
        const selectedColorTheme = GeneralDomChanges.getSelectedColorTheme($event);
        const body = document.querySelector('body');
        body.classList.add(selectedColorTheme);
        GeneralDomChanges.getOtherColorThemeClasses(selectedColorTheme).forEach(
            (otherColorThemeClass) => {
                body.classList.remove(otherColorThemeClass);
            },
        );
    }

    static getSelectedColorTheme($event) {
        return $event?.target?.value ? $event.target.value : 'blackWhiteStyle';
    }

    static getOtherColorThemeClasses(selectedColorThemeClass) {
        const allColorThemeClasses = ['blackWhiteStyle', 'darkMode', 'rainbow'];
        return allColorThemeClasses.filter(
            (colorThemeClass) => colorThemeClass !== selectedColorThemeClass,
        );
    }
}
