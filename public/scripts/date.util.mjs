export default class DateUtils {
    static formatForDateInputValue(dateIsoString) {
        return dateIsoString ? dateIsoString.split('T')[0] : dateIsoString;
    }
}
