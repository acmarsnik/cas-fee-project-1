export default class TextUtils {
    static convertLineBreaksForHTML(text) {
        return text ? text.replaceAll('\n', '<br />') : null;
    }

    static convertLineBreaksForDB(text) {
        return text ? text.replaceAll('<br />', '\n') : null;
    }
}
