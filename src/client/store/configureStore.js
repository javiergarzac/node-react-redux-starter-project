import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createReducer from '../reducers';

const initializeStore = () => {
    const store = createStore(
        createReducer(),
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );

    store.asyncReducers = {};
    store.injectReducer = (key, reducer) => {
        store.asyncReducers[key] = reducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    return store;
}

export default initializeStore;