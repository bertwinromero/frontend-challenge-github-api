import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function paginationReducer(state = initialState.totalCount, action) {
    switch (action.type) {
        case types.PAGINATION_CHANGED:
            return action.totalCount;

        default:
            return state;

    }
}