import React, { useReducer } from 'react';
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
  GET_PRODUCTS,
} from "../../types";