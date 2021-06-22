import SortUtils from './sort.util.mjs';
import SortOptions from './sort-options.mjs';
import FilterUtils from './filter.util.mjs';

export default class TransformationUtils {
    static transformNotes(notes, transformationOptions) {
        let isFiltered = false;

        if (transformationOptions) {
            if (transformationOptions.type === 'sort') {
                notes = SortUtils.getSortedNotes(
                    notes,
                    new SortOptions(
                        transformationOptions.property,
                        transformationOptions.sortDirection,
                    ),
                );
            } else if (transformationOptions.type === 'filter') {
                notes = FilterUtils.removeFalsy(notes, transformationOptions.property);
                isFiltered = true;
            }
        }
        return { notes, isFiltered };
    }
}
