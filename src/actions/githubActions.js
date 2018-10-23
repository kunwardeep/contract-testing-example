import githubApi from '../api/api.js';

const REQUEST_USERS = 'REQUEST_USERS';
const REQUEST_USER_DETAIL = 'REQUEST_USER_DETAIL';

export const REQUEST_USERS_COMPLETE = 'REQUEST_USERS_COMPLETE';
export const REQUEST_USER_DETAIL_COMPLETE = 'REQUEST_USERS_DETAIL_COMPLETE';

const requestUsers = () => ({
  type: REQUEST_USERS
});

const requestUserDetail = () => ({
  type: REQUEST_USER_DETAIL
});

const requestUsersComplete = users => ({
  type: REQUEST_USERS_COMPLETE,
  payload: users
});

const requestUserDetailComplete = user => ({
  type: REQUEST_USER_DETAIL_COMPLETE,
  payload: user
});

export const users = () => async dispatch => {
  dispatch(requestUsers());
  try {
    const allUsers = await githubApi.getAllUsers();
    return dispatch(requestUsersComplete(allUsers));
  }
  catch (e) {
    console.log(e)
  }
};

export const userDetail = () => async dispatch => {
  dispatch(requestUserDetail());
  try {
    const user = await githubApi.getUserDetails();
    return dispatch(requestUserDetailComplete(user));
  }
  catch (e) {
    console.log(e)
  }
};
