import React, { useReducer } from 'react';
import alertReducer from './alertReduce';
import alertContext from './alertContext';
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertState = (props) => {

  const initialState = {
    alerta: null
  }

  const [ state, dispatch ] = useReducer(alertReducer, initialState);

  //Functions
  const showAlert = (message, category) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        message,
        category
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      });
    }, 5000);
  }

  return (
    <alertContext.Provider
      value={{
        alerta: state.alerta,
        showAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
}

export default AlertState;