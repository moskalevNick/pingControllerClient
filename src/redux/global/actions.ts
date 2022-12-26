import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionNames } from '../actionNames';
import { getActionName } from '../getActionName';
import { modules } from '../modules';
import RequestService from '../../services/RequestService';
import ResponseService from '../../services/ResponseService';

export const globalActions = {
  getRequests: createAsyncThunk(
    getActionName(modules.GLOBAL, actionNames[modules.GLOBAL].getRequests),
    async () => {
      try {
        const response = await RequestService.getRequests();

        return response;
      } catch (e) {
        console.log(e);
      }
    }
  ),
  deleteRequests: createAsyncThunk(
    getActionName(modules.GLOBAL, actionNames[modules.GLOBAL].deleteRequests),
    async () => {
      try {
        const response = await RequestService.deleteRequests();

        return response;
      } catch (e) {
        console.log(e);
      }
    }
  ),
  getResponse: createAsyncThunk(
    getActionName(modules.GLOBAL, actionNames[modules.GLOBAL].getResponse),
    async () => {
      try {
        const response = await ResponseService.getResponse();
        return response;
      } catch (e) {
        console.log(e);
      }
    }
  ),
  createResponse: createAsyncThunk(
    getActionName(modules.GLOBAL, actionNames[modules.GLOBAL].createResponse),
    async (responseBody: JSON) => {
      try {
        const response = await ResponseService.createResponse(responseBody);
        return response;
      } catch (e) {
        console.log(e);
      }
    }
  ),
};
