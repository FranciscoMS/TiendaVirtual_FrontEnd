import {
  GET_PRODUCTS, 
  START_GET_PRODUCTS,
  GET_PRODUCTS_ERROR
} from "../types";
import clientAxios from "../config/axios";

export function getAllProductsAction () {
  return async (dispatch) => {
    dispatch( loadingGetProducts() );

    try {
      const response = await clientAxios.get("/api/products");
      dispatch( getAllProducts(response.data.products) );

    } catch (error) {
      dispatch( getAllProductsError(error) );
    }
  }
}

const loadingGetProducts = () => ({
  type: START_GET_PRODUCTS,
  payload: true
});

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products
});

const getAllProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error
});