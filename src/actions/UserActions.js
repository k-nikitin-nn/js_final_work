import * as types from '../constants/UserConstants'
import { onClickingPost } from '../actions/PostActions'

import callApi from '../api/FetchApi'

export const onLoadUsers = () => async dispatch => {

  const result = await callApi('http://localhost:3003/users');
  if(result.isError) {
    dispatch(fetchUsersFail(result.error));
  }else {
    dispatch(fetchUsersSuccess(result.data));
  }

};

export const searchUserByLogin = (users, login) => users.find((user) => user.login === login);

export const searchUserById = (users, id) => users.find((user) => user.id === id);

const fetchUsersSuccess = users => ({ type: types.FETCH_USERS_SUCCESS, users });

const fetchUsersFail = errorFetch => ({ type: types.FETCH_USERS_FAIL, errorFetch });

export const fetchUserFail = errorFetch => ({ type: types.FETCH_USER_FAIL, errorFetch });

