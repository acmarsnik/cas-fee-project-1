export default class TextUtils {
    static convertLineBreaksForHTML(text) {
        return text.replaceAll('\n', '<br />');
    }
}
