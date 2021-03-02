import {
  ADD_SHOPPING,
  UPDATE_SHOPPING,
  GET_SHOPPINGS,
  DELETE_SHOPPING,
  SHOPPING_EMPTY,
  SHOPPING_ERROR,
} from "../types";

const initialState = {
  shoppings: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SHOPPING:
      return {
        ...state,
        shoppings: [...state.shoppings, action.payload],
        error: null,
      };
    case GET_SHOPPINGS:
      return {
        ...state,
        shoppings: action.payload,
        error: null,
      };
    case DELETE_SHOPPING:
      return {
        ...state,
        shoppings: state.shoppings.filter(
          (shopping) => shopping._id !== action.payload
        ),
        error: null,
      };
    case UPDATE_SHOPPING:
      return {
        ...state,
        shoppings: state.shoppings.map((shopping) =>
          shopping._id === action.payload._id ? action.payload : shopping
        ),
      };
    case SHOPPING_EMPTY:
      return {
        ...state,
        shoppings: action.payload,
        error: null
      }
    case SHOPPING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
