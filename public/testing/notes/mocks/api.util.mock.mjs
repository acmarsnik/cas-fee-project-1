export default class ApiUtilsMock {
    constructor(getResponseJson) {
        this.getResponseJson = getResponseJson;
    }

    async getResponseJson(url, defaultJsonResponse = {}, method = 'GET', body = null) {
        return [];
    }
}
