import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: null,
  user: null,
  error: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        authenticated: true,
        error: null,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };
    case LOGOUT:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        authenticated: null,
        user: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
