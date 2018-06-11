import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import users from './userListReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    users,
    user,
    ajaxCallsInProgress
});

export default rootReducer;