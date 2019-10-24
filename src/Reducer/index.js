import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../Action";

const initialState = {
  user: [],
  isLoggedIn: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
