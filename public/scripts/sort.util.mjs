export default class SortUtils {
    static getSortDirection(state, sortProperty) {
        let direction = 'descending';
        if (
            state?.transformationProperty?.includes(sortProperty) &&
            state?.sortDirection?.includes('descending')
        ) {
            direction = 'ascending';
        }

        return direction;
    }

    static sortDates(a, b, sortOptions) {
        const sortProperty = sortOptions.property;
        const sortDirection = sortOptions.direction;
        const aTime = a[sortProperty] ? new Date(a[sortProperty]).getTime() : 0;
        const bTime = b[sortProperty] ? new Date(b[sortProperty]).getTime() : 0;
        if (sortDirection === 'ascending') return aTime - bTime;
        else return bTime - aTime;
    }

    static sortNumbers(a, b, sortOptions) {
        const sortProperty = sortOptions.property;
        const sortDirection = sortOptions.direction;
        const aNumber = a[sortProperty] ? a[sortProperty] : 0;
        const bNumber = b[sortProperty] ? b[sortProperty] : 0;
        if (sortDirection === 'ascending') return aNumber - bNumber;
        else return bNumber - aNumber;
    }
}
