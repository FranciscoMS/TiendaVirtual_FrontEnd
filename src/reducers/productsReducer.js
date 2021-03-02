import { GET_PRODUCTS, START_GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GET_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
