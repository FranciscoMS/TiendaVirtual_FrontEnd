import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async data => {
    try {
      const response = await clientAxios.post('/api/users', data);
      console.log(response.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });

      authUser();
    } catch (error) {
      
      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error'
      };

      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      });
    }
  }

  const authUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }

    try {
      const response = await clientAxios.get('/api/auth');
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthState;