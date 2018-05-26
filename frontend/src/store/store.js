import reducer from './reducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(promise, thunk))
    )

export default store;
