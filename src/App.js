import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Products from "./components/products/Products";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import PrivateRoute from "./components/routes/PrivateRoute";
import tokenAuth from "./config/tokenAuth";
import 'antd/dist/antd.css';

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Check if token exist
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/shoppingcar" component={ShoppingCart} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
