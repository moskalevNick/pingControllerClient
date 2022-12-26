import { combineReducers, configureStore, Slice } from '@reduxjs/toolkit';
import { globalReducer } from './global/reducer';

const rootReducer = combineReducers({
  globalReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootStateExtended<SL extends Slice> = ReturnType<
  typeof store.getState
> &
  Record<SL['name'], ReturnType<SL['reducer']>>;
