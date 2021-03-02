import {
  ADD_SHOPPING,
  UPDATE_SHOPPING,
  GET_SHOPPINGS,
  DELETE_SHOPPING,
  SHOPPING_EMPTY,
  SHOPPING_ERROR,
} from "../types";
import clientAxios from "../config/axios";

export function addProductToCartAction(product) {
  return async (dispatch) => {
    try {
      const resultado = await clientAxios.post("/api/shopping", product);
      dispatch(addProductToCart(resultado.data.resShopping));
    } catch (error) {
      const alert = {
        message: "Inicie sesión para agregar productos",
        category: "alerta-error",
      };
      
      dispatch(shoppingShowError(alert));
    }
  }
}

export function getShoppingsAction () {
  return async (dispatch) => {
    try {
      const response = await clientAxios.get("/api/shopping");
      dispatch(getShoppings(response.data.shoppingCart));
    } catch (error) {
      const alert = {
        message: "Hubo un error",
        category: "alerta-error",
      };

      dispatch(shoppingShowError());
    }
  }
}

export function deleteShoppingAction (idShopping) {
  return async (dispatch) => {
    try {
      clientAxios.delete(`/api/shopping/${idShopping}`);
      dispatch(deletedShopping(idShopping));
    } catch (error) {
      const alert = {
        message: "Hubo un error",
        category: "alerta-error",
      };

      dispatch(shoppingShowError(alert));
    }
  }
}

export function updateShoppingAction(id, shopping) {
  return async (dispatch) => {
    try {
      const response = await clientAxios.put(`/api/shopping/${id}`, shopping);
      dispatch(updateShopping(response.data));
    } catch (error) {
      const alert = {
        message: "Hubo un error",
        category: "alerta-error",
      };

      dispatch(shoppingShowError(alert));
    }
  }
}

export function shoppingEmptyAction() {
  return (dispatch) => {
    dispatch(shoppingEmpty());
  }
}

const addProductToCart = (newShopping) => ({
  type: ADD_SHOPPING,
  payload: newShopping
});

const shoppingShowError = (alert) => ({
  type: SHOPPING_ERROR,
  payload: alert
});

const getShoppings = (shoppings) => ({
  type: GET_SHOPPINGS,
  payload: shoppings
});

const deletedShopping = (idShopping) => ({
  type: DELETE_SHOPPING,
  payload: idShopping
});

const updateShopping = (shopping) => ({
  type: UPDATE_SHOPPING,
  payload: shopping
});

const shoppingEmpty = () => ({
  type: SHOPPING_EMPTY,
  payload: []
});