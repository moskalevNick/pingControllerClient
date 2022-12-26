import { modules } from './modules';

export const actionNames = {
  [modules.GLOBAL]: {
    getRequests: 'GET_REQUESTS',
    deleteRequests: 'DELETE_REQUESTS',
    getResponse: 'GET_RESPONSE',
    createResponse: 'CREATE_RESPONSE',
  },
};
