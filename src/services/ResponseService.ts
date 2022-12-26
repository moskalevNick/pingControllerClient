import $api from '../http';

const path = 'response';

export default class ResponseService {
  static async getResponse() {
    const response = await $api.get(`${path}`);
    return response.data;
  }
  static async createResponse(responseBody: JSON) {
    const response = await $api.post(`${path}`, responseBody);
    return response.data;
  }
}
