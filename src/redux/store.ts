import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';

import thunk from 'redux-thunk';
import { itemsReducer } from './reducers/items';
import { itemByIdReducer } from './reducers/itemById';




declare global {    
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    items: itemsReducer,
    itemById: itemByIdReducer,
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);