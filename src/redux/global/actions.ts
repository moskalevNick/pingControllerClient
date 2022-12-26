import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionNames } from '../actionNames';
import { getActionName } from '../getActionName';
import { modules } from '../modules';
import RequestService from '../../services/RequestService';

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
};
