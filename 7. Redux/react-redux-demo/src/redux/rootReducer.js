import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import userReducer from './user/userReducer'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: userReducer,
    counter: counterReducer
})

export default rootReducer