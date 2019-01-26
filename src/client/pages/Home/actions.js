import * as types from './actionTypes'

export function isLoggedIn() {
    return {
        type: types.LOGIN,
        isLogged: true
    }
}
