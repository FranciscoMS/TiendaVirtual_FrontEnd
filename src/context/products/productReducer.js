import {
  GET_PRODUCTS
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false
      }
    default:
      return state;
  }
}