import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Products from './components/products/Products';
import ShoppingCart from './components/shoppingCart/ShoppingCart';

import AlertaState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import ProductState from './context/products/productState';
import ShoppingState from './context/shopping/shoppingState';
import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/PrivateRoute';

//Check if token exist
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}


function App() {

  return (
    <ProductState>
      <ShoppingState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                  <Route exact path="/" component={Products} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />          
                  <PrivateRoute exact path="/shoppingcar" component={ShoppingCart} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </ShoppingState>
    </ProductState>
  );
}

export default App;
