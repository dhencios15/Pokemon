import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from '../features/app/appSlice';

const isProduction = process.env.NODE_ENV === 'production';

const reducers = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: !isProduction,
});

export const persistor = persistStore(store);
