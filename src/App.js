import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Products from './components/products/Products';
import ShoppingCar from './components/products/ShoppingCar';

import AlertaState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/PrivateRoute';

//Check if token exist
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}


function App() {

  const [products, setProducts] = useState([{
    name:'Camisa Queen',
    price: 2500.00,
    description: 'Camisa de la banda de rock Queen',
    qtyInventary: 15
  }, {
    name:'Camisa Queen',
    price: 2500.00,
    description: 'Camisa de la banda de rock Queen',
    qtyInventary: 15
  }]);

  const [goLogin, setGoLogin] = useState(true);

  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />          
              <PrivateRoute exact path="/shoppingcar" component={ShoppingCar} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
