import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'

/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState,  composeEnhancers(
    applyMiddleware(logger)
));
*/

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store

