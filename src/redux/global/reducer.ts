import { createSlice } from '@reduxjs/toolkit';
import { RequestType, ResponseType } from '../../types';
import { modules } from '../modules';
import { globalActions } from './actions';

const globalSlice = createSlice({
  name: modules.GLOBAL,
  initialState: {
    requests: [] as RequestType[],
    response: null as ResponseType | null,
  },
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(globalActions.getRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
      })
      .addCase(globalActions.deleteRequests.fulfilled, (state) => {
        state.requests = [];
      })
      .addCase(globalActions.getResponse.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(globalActions.createResponse.fulfilled, (state, action) => {
        state.response = action.payload;
      });
  },
});

export const globalReducer = globalSlice.reducer;
export const globalSettingActions = globalSlice.actions;
