import {
  ADD_SHOPPING,
  UPDATE_SHOPPING,
  GET_SHOPPINGS,
  DELETE_SHOPPING,
  SHOPPING_ERROR,
} from "../../types";

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ADD_SHOPPING:
      return {
        ...state,
        shoppings: [...state.shoppings, action.payload],
        message: null,
      };
    case GET_SHOPPINGS:
      return {
        ...state,
        shoppings: action.payload,
        message: null,
      };
    case DELETE_SHOPPING:
      return {
        ...state,
        shoppings: state.shoppings.filter(
          (shopping) => shopping._id !== action.payload
        ),
        message: null,
      };
    case UPDATE_SHOPPING:
      return {
        ...state,
        shoppings: state.shoppings.map((shopping) =>
          shopping._id === action.payload._id ? action.payload : shopping
        ),
      };
    case SHOPPING_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingReducer;
