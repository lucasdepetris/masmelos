import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "../actions/actionTypes";

const initialState = {
  token: null,
  expiryDate: null,
  user: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token,
        expiryDate: action.expiryDate,
        user: action.user,
        isAuthenticated: true,
      };
    case AUTH_REMOVE_TOKEN:
      return initialState;
    default:
      return state;
  }
};
