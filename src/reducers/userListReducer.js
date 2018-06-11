import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userListReducer(state = initialState.users, action) {
    switch (action.type) {
        case types.SEARCH_USERS_SUCCESS:
            return action.users;

        default:
            return state;

    }
}