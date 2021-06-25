export default class ApiUtils {
    async getResponseJson(url, defaultJsonResponse = {}, method = 'GET', body = null) {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        let responseJson = defaultJsonResponse;

        if (response.status === 200) {
            responseJson = await response.json();
        }

        return responseJson;
    }
}
