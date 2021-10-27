import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import users from 'app/lib/store/reducers/users';
import usersSearch from 'app/lib/store/reducers/user-search';

const reducers = combineReducers({
  users,
  usersSearch,
});

const persistConfig = {
  key: 'root',
  storage: createSensitiveStorage({
    keychainService: 'hayoapa',
    sharedPreferencesName: 'hayoapa',
  }),
  whitelist: ['users'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

export default store;
