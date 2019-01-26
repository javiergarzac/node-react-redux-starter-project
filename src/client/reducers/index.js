import { combineReducers } from 'redux';
import AppConfig from './AppConfig';

const createReducer = asyncReducers =>
    combineReducers({
        AppConfig,
        ...asyncReducers
    }
);

export default createReducer;