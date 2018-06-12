import * as types from './actionTypes';

export function setTotalCount(totalCount){
    return {type: types.PAGINATION_CHANGED, totalCount};
}
