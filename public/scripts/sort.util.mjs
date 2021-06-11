export default class SortUtils {
    static getSortDirection(state, sortProperty) {
        let direction = 'descending';
        if (
            state?.sortProperty?.includes(sortProperty) &&
            state?.sortDirection?.includes('descending')
        ) {
            direction = 'ascending';
        }

        return direction;
    }

    static sortAbDates(a, b, sortObject) {
        const sortProperty = sortObject.sortProperty;
        const sortDirection = sortObject.sortDirection;
        const bTime = b[sortProperty] ? b[sortProperty].getTime() : 0;
        const aTime = a[sortProperty] ? a[sortProperty].getTime() : 0;
        if (sortDirection === 'descending') return bTime - aTime;
        else return aTime - bTime;
    }
}
