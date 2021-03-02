import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import shoppingReducer from './shoppingReducer';

export default combineReducers({
  products: productsReducer,
  auth: authReducer,
  alert: alertReducer,
  shopping: shoppingReducer
});