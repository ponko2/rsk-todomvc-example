import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, RootState } from './rootReducer';

export const store = configureStore({ reducer: rootReducer });

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', async () => {
    const { rootReducer: newRootReducer } = await import('./rootReducer');
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
