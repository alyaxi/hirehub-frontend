import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root', // key for the root of the state in storage
  storage, // storage engine, e.g., local storage or AsyncStorage
  // Optionally, you can configure other options here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
export default store;

