export default class TemplateIdUtils {
    static getPrefix(prefix = '') {
        return `template__${prefix}__`;
    }

    static getTopLevelPrefix(prefix = '') {
        return `${this.getPrefix(prefix)}top-level__`;
    }

    static getCreateEditNoteTopLevelPrefix() {
        return TemplateIdUtils.getTopLevelPrefix('create-edit-note');
    }

    static getImportanceTopLevelPrefix() {
        return TemplateIdUtils.getTopLevelPrefix('importance');
    }

    static getNotesTopLevelPrefix() {
        return TemplateIdUtils.getTopLevelPrefix('notes');
    }
}
