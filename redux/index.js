import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import {
    AsyncStorage,
} from 'react-native';

import reducers from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['testReducer', 'sessionReducer', 'searchReducer'], // items in these reducers will not persist between app sessions. 
    whitelist: ['profileReducer', 'appStateReducer'] // items in these reducers will  persist between app sessions. 
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

export { persistor, store }

export default { persistor, store }