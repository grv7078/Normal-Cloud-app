import * as types from "./types";

export function fetchUsersBegin() {
  return { type: types.FETCH_USERS_BEGIN, payload: {} };
}

export function fetchUsersSuccess(users) {
  return { type: types.FETCH_USERS_SUCCESS, payload: users };
}

export function fetchUsersFailure() {
  return { type: types.FETCH_USERS_FAILURE, payload: {} };
}

export function createUserBegin(newUser) {
  return { type: types.CREATE_USER_BEGIN, newUser };
}

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, payload: user };
}

export function createUserFailure() {
  return { type: types.CREATE_USER_FAILURE, payload: {} };
}

export function editUserBegin(userId, user) {
  return { type: types.EDIT_USER_BEGIN, payload: { user, userId } };
}

export function editUserSuccess(userId, updatedUser) {
  return { type: types.EDIT_USER_SUCCESS, payload: { userId, updatedUser } };
}

export function editUserFailure() {
  return { type: types.EDIT_USER_FAILURE, payload: {} };
}

export function deleteUserBegin(userId) {
  return { type: types.DELETE_USER_BEGIN, userId };
}

export function deleteUserSuccess(userId) {
  return { type: types.DELETE_USER_SUCCESS, payload: userId };
}

export function deleteUserFailure() {
  return { type: types.DELETE_USER_FAILURE, payload: {} };
}
