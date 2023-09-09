import { all, fork } from "redux-saga/effects";

import usersSaga from "./usersSaga";

export default function* rootSaga(params) {
  yield all([fork(usersSaga)]);
}
