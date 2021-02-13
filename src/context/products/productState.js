import React, { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import clientAxios from "../../config/axios";

import { GET_PRODUCTS } from "../../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
  };

  //Dispatch
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getAllProducts = async () => {
    try {
      const response = await clientAxios.get("/api/products");

      dispatch({
        type: GET_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getAllProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
