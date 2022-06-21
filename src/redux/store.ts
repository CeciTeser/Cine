import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';

import thunk from 'redux-thunk';
import { itemsReducer } from './reducers/items';
import { itemByIdReducer } from './reducers/itemById';
import { videosReducer } from './reducers/videos';



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
    video: videosReducer,

})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);