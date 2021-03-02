import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../types";

import clientAxios from "../config/axios";
import tokenAuth from "../config/tokenAuth";

export function registerUserAction(user) {
  return async (dispatch) => {
    try {
      const response = await clientAxios.post("/api/users", user);
      dispatch(registerUser(response.data));
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch(registerUserError(alert));
    }
  };
}

export function authUserAction() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    tokenAuth(token);

    try {
      const response = await clientAxios.get("/api/auth");
      dispatch(userInfo(response.data.user));
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch(loginError(alert));
    }
  };
}

export function loginAction(user) {
  return async (dispatch) => {
    try {
      const response = await clientAxios.post("/api/auth", user);
      dispatch(loginSuccess(response.data));

      //Get authenticated user
      authUserAction();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch(loginError(alert));
    }
  };
}

export function logoutAction() {
  return (dispatch) => {
    tokenAuth(null);
    dispatch(logoutSuccess());
  }
}

const registerUser = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});

const registerUserError = (alert) => ({
  type: REGISTER_ERROR,
  payload: alert,
});

const userInfo = (user) => ({
  type: GET_USER,
  payload: user,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginError = (alert) => ({
  type: LOGIN_ERROR,
  payload: alert
});

const logoutSuccess = () => ({
  type: LOGOUT
});
