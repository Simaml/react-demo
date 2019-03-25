import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/reducer';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'ccpStorage',
    storage: storageSession
};
const newReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(newReducer);
export const newStore = persistStore(store);
