import React, { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import ShoppingReducer from "./shoppingReducer";
import clientAxios from "../../config/axios";

import {
  ADD_SHOPPING,
  UPDATE_SHOPPING,
  GET_SHOPPINGS,
  DELETE_SHOPPING,
  SHOPPING_ERROR,
} from "../../types";

const ShoppingState = (props) => {
  const initialState = {
    shoppings: [],
  };

  //Dispatch
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  //Add product to shopping cart
  const addProductToCart = async (product) => {
    try {
      const resultado = await clientAxios.post("/api/shopping", product);
      console.log(resultado);
      // Insertar el proyecto en el state
      dispatch({
        type: ADD_SHOPPING,
        payload: resultado.data.resShopping,
      });
    } catch (error) {
      const alert = {
        message: "Inicie sesión para agregar productos",
        category: "alerta-error",
      };

      dispatch({
        type: SHOPPING_ERROR,
        payload: alert,
      });
    }
  };

  //Get all shopping of user logged
  const getShoppings = async () => {
    try {
      const response = await clientAxios.get("/api/shopping");
      dispatch({
        type: GET_SHOPPINGS,
        payload: response.data.shoppingCart,
      });
    } catch (error) {
      dispatch({
        type: SHOPPING_ERROR,
      });
    }
  };

  //Delete a product from shopping cart
  const deleteShopping = async (idShopping) => {
    try {
      await clientAxios.delete(`/api/shopping/${idShopping}`);

      dispatch({
        type: DELETE_SHOPPING,
        payload: idShopping,
      });
    } catch (error) {
      const alert = {
        message: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: SHOPPING_ERROR,
        payload: alert,
      });
    }
  };

  //Update a product from shopping cart
  const updateShopping = async (id, shopping) => {
    try {
      const response = await clientAxios.put(`/api/shopping/${id}`, shopping);

      dispatch({
        type: UPDATE_SHOPPING,
        payload: response.data,
      });
    } catch (error) {
      const alert = {
        message: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: SHOPPING_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <ShoppingContext.Provider
      value={{
        shoppings: state.shoppings,
        message: state.message,
        addProductToCart,
        getShoppings,
        updateShopping,
        deleteShopping,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
