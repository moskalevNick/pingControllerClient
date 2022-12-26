import { createSlice } from '@reduxjs/toolkit';
import { RequestType } from '../../types';
import { modules } from '../modules';
import { globalActions } from './actions';

const globalSlice = createSlice({
  name: modules.GLOBAL,
  initialState: {
    requests: [] as RequestType[],
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
      });
  },
});

export const globalReducer = globalSlice.reducer;
export const globalSettingActions = globalSlice.actions;
