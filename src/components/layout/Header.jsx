import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authentication/authContext";
import ShoppingContext from "../../context/shopping/shoppingContext";
import ShoppingCart from "../../assets/shopping-cart.svg";
import LogIn from "../../assets/login.svg";
import Logout from "../../assets/logout.svg";

const Header = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { user, authUser, logout } = authContext;

  const shoppingContext = useContext(ShoppingContext);
  const { shoppings, getShoppings } = shoppingContext;

  useEffect(() => {
    authUser();
    getShoppings();
    // eslint-disable-next-line
  }, []);

  const toLogin = () => {
    history.push("/login");
  };

  const toShopping = () => {
    history.push("/shoppingcar");
  };

  return (
    <header className="app-header">
      <nav className="nav-principal">
        {user ? (
          <div className="nav-left">
            <p className="nombre-usuario">
              Hola <span>{`${user.name} ${user.lastName}`}</span>
            </p>
          </div>
        ) : null}
        <div className="nav-right">
          <div className="icon" onClick={() => toShopping()}>
            <img src={ShoppingCart} alt="none" width="100%" height="100%" />
            {shoppings.length > 0 && user ? (
              <div className="txt">{shoppings.length}</div>
            ) : null}
          </div>
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
