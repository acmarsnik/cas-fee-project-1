import cloneDeep from 'lodash.clonedeep';
import SortUtils from './sort.util.mjs';
import SortOptions from '../../models/sort-options.mjs';
import FilterUtils from './filter.util.mjs';

export default class TransformationUtils {
    static transformNotes(notes, transformationOptions) {
        let isFiltered = false;
        let transformedNotes;

        if (transformationOptions) {
            if (transformationOptions.type === 'sort') {
                transformedNotes = SortUtils.getSortedNotes(
                    notes,
                    new SortOptions(
                        transformationOptions.property,
                        transformationOptions.sortDirection,
                    ),
                );
            } else if (transformationOptions.type === 'filter') {
                transformedNotes = FilterUtils.removeFalsy(notes, transformationOptions.property);
                isFiltered = true;
            }
        }
        return {
            notes: transformedNotes ? transformedNotes : cloneDeep(notes),
            isFiltered,
        };
    }
}
