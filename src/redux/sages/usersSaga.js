import { takeLatest, put, call } from "redux-saga/effects";

import * as types from "../actions/types";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  deleteUserSuccess,
  deleteUserFailure,
  createUserSuccess,
  createUserFailure,
  editUserSuccess,
  editUserFailure,
} from "../actions/users";
import {
  fetchUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
} from "../../api/users";

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users.data));
  } catch (error) {
    yield put(fetchUsersFailure());
  }
}

function* createUserSaga({ newUser }) {
  try {
    const user = yield createUserApi(newUser);
    yield put(createUserSuccess(user.data));
  } catch (error) {
    yield put(createUserFailure());
  }
}

function* editUserSaga({ payload }) {
  try {
    const updatedUser = yield updateUserApi(payload.userId, payload.user);
    yield put(editUserSuccess(payload.userId, updatedUser.data));
  } catch (error) {
    yield put(editUserFailure());
  }
}

function* deleteUserSaga({ userId }) {
  try {
    yield deleteUserApi(userId);
    yield put(deleteUserSuccess(userId));
  } catch (error) {
    yield put(deleteUserFailure());
  }
}

function* usersSaga() {
  yield takeLatest(types.FETCH_USERS_BEGIN, fetchUsersSaga);
  yield takeLatest(types.DELETE_USER_BEGIN, deleteUserSaga);
  yield takeLatest(types.CREATE_USER_BEGIN, createUserSaga);
  yield takeLatest(types.EDIT_USER_BEGIN, editUserSaga);
}

export default usersSaga;
