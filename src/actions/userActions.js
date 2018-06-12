import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { setTotalCount } from './paginationActions';
import axios from "axios";

export function searchUsersSuccess(users) {
    return { type: types.SEARCH_USERS_SUCCESS, users };
}

export function searchUserByIdSuccess(user) {
    return { type: types.SEARCH_USER_BY_ID_SUCCESS, user };
}

export function searchUsers(username, pageNumber = 1) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return axios.get(`https://api.github.com/search/users?q=${username}&page=${pageNumber}&per_page=24`).then(res => {
            dispatch(setTotalCount(res.data.total_count));
            dispatch(searchUsersSuccess(res.data.items));
        }).catch(error => {
            // do something if has error
        });
    };
}

export function searchUserById(id) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return axios.get(`https://api.github.com/user/${id}`).then(res => {
            dispatch(searchUserByIdSuccess(res.data));
        }).catch(error => {
            // do something if has error
        });
    };
}

