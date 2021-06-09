export default class TemplateIdUtils {
    static getPrefix(prefix = '') {
        return `template__${prefix}__`;
    }

    static getTopLevelPrefix(prefix = '') {
        return `${this.getPrefix(prefix)}top-level__`;
    }
}
