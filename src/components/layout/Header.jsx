import React, { useEffect } from "react";
import { Avatar, Badge } from "antd";
import ShoppingCart from "../../assets/shopping-cart.svg";
import LogIn from "../../assets/login.svg";
import Logout from "../../assets/logout.svg";

//Action Redux
import { useSelector, useDispatch } from "react-redux";
import { authUserAction, logoutAction } from "../../actions/authActions";
import { getShoppingsAction, shoppingEmptyAction } from "../../actions/shoppingActions";

const Header = ({ history }) => {
  // Get state
  const user = useSelector((state) => state.auth.user);
  const { shoppings } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserAction());
    dispatch(getShoppingsAction());
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    dispatch(logoutAction());
    dispatch(shoppingEmptyAction());
  };

  const toLogin = () => {
    history.push("/login");
  };

  const toShopping = () => {
    history.push("/shoppingcar");
  };

  return (
    <header className="app-header">
      <nav className="nav-principal">
        <div className="nav-left">
          <p className="nombre-usuario">Logo</p>
        </div>
        <div className="nav-right">
          {user ? (
            <Avatar className="icon user">{`${user.name.split("").slice(0, 1)}${user.lastName.split("").slice(0, 1)}`}</Avatar>
          ) : null}
          <Badge
            size="small"
            className="icon"
            count={user ? shoppings.length : 0}
            onClick={() => toShopping()}
          >
            <img src={ShoppingCart} alt="none" width="100%" height="100%" />
          </Badge>
          {user ? (
            <div className="icon" onClick={() => logout()}>
              <img
                src={Logout}
                alt="Cerrar Sesión"
                width="100%"
                height="100%"
              />
            </div>
          ) : (
            <div className="icon" onClick={() => toLogin()}>
              <img
                src={LogIn}
                alt="Iniciar Sesión"
                width="100%"
                height="100%"
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
