// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store =  createStore(rootReducer,applyMiddleware(thunk));

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Konfigurasi Redux Persist
const persistConfig = {
  key: 'root', // Key untuk penyimpanan
  storage, // Jenis penyimpanan (local storage)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Buat store dengan middleware dan reducer yang telah di-persist
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
