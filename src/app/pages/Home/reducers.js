import * as types from './actionTypes';
import { bindActionCreators } from 'redux';
import { HomeInitialState } from './initialState';

export default function HomeReducer(state = HomeInitialState, action) {
    switch (bindActionCreators.type) {
        case types.LOGIN: {
            return {
                ...state,
                login: true
            }
        };

        default:
            return state
    }
}