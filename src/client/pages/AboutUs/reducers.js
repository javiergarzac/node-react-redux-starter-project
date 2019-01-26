import * as types from './actionTypes';
import { bindActionCreators } from 'redux';
import { AboutUsInitialState } from './initialState';

export default function AboutUsReducer(state = AboutUsInitialState, action) {
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