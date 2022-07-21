import testReducer from './testReducer'
import sessionReducer from './sessionReducer'
import searchReducer from './searchReducer'
import profileReducer from './profileReducer'
import appStateReducer from './appStateReducer'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    testReducer,
    sessionReducer,
    searchReducer,
    profileReducer,
    appStateReducer
})

export default reducers;