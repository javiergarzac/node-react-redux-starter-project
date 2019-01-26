import { combineReducers } from 'redux';

const AppConfig = () => {
    return {
        // Any initial base app configuration
    }
};

const createReducer = asyncReducers => {
    return combineReducers({
        AppConfig,
        ...asyncReducers
    })
};

export default createReducer;