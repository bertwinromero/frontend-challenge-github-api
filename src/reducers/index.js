import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import users from './userListReducer';
import user from './userReducer';
import totalCount from './paginationReducer';

const rootReducer = combineReducers({
    users,
    user,
    ajaxCallsInProgress,
    totalCount
});

export default rootReducer;