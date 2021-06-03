export default class TemplateIdUtils {
    static getPrefix(prefix = '') {
        return `template__${prefix}`;
    }

    static getTopLevelPrefix(prefix = '') {
        return `${this.getPrefix(prefix)}__top-level__`;
    }
}
