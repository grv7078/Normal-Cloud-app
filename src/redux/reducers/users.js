import * as types from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function userReducer(state = initialState, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case types.FETCH_USERS_BEGIN:
    case types.CREATE_USER_BEGIN:
    case types.EDIT_USER_BEGIN:
      return { ...state, loading: true };

    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: payload };

    case types.FETCH_USERS_FAILURE:
    case types.CREATE_USER_FAILURE:
    case types.EDIT_USER_FAILURE:
      return { ...state, loading: false, error: true };

    case types.DELETE_USER_SUCCESS:
      const updatedUsers = state.users.filter(
        (user) => user.id !== parseInt(payload)
      );
      return { ...state, users: [...updatedUsers] };

    case types.DELETE_USER_FAILURE:
      return { ...state, loading: false, error: true };

    case types.CREATE_USER_SUCCESS:
      const newUser = new Set([{ ...payload }, ...state.users]);
      return { ...state, loading: false, users: [...newUser] };

    case types.EDIT_USER_SUCCESS:
      const modifiedUser = state.users.map((user) => {
        if (user.id === parseInt(payload.userId)) {
          return {
            ...payload.updatedUser,
          };
        } else return user;
      });

      return { ...state, loading: false, users: modifiedUser };
    default:
      return state;
  }
}
