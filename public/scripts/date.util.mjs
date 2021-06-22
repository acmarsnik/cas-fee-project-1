export default class DateUtils {
    static formatForDateInputValue(dateIsoString) {
        return dateIsoString ? dateIsoString.split('T')[0] : dateIsoString;
    }

    static dateInputValueToISOString(dateInputValue) {
        const dateInputYearMonthDay = dateInputValue ? dateInputValue.split('-') : null;
        const dateInputIsoString = dateInputValue
            ? new Date(
                  dateInputYearMonthDay[0],
                  dateInputYearMonthDay[1],
                  dateInputYearMonthDay[2],
                  12,
              ).toISOString()
            : null;
        return dateInputIsoString;
    }
}
