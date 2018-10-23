import { combineReducers } from 'redux';
import { REQUEST_USERS_COMPLETE, REQUEST_USER_DETAIL_COMPLETE } from '../actions/githubActions';

function users(state = [], action) {
  switch (action.type) {
    case REQUEST_USERS_COMPLETE:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

function userDetail(state = {}, action) {
  switch (action.type) {
    case REQUEST_USER_DETAIL_COMPLETE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users,
  userDetail
});

export default rootReducer;
