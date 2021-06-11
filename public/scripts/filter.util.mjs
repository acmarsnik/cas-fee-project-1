export default class FilterUtils {
    static removeFalsy(notes, filterProperty) {
        return notes.filter((note) => note[filterProperty]);
    }
}
