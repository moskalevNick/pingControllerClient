import $api from '../http';

export default class RequestService {
  static async getRequests() {
    const response = await $api.get('');
    return response.data;
  }
  static async deleteRequests() {
    const response = await $api.delete('');
    return response.data;
  }
}
