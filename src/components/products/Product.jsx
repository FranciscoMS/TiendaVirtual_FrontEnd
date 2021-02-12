import React, { useContext, useEffect } from "react";
import ShoppingCart from "../../assets/shopping-cart.svg";
import ShoppingContext from "../../context/shopping/shoppingContext";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from '../../context/authentication/authContext';

const Product = ({ product }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { message, addProductToCart } = shoppingContext;

  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { authenticated, loading, authUser } = authContext;

  //Get user info
  useEffect(() => {
    authUser();
    // eslint-disable-next-line
  }, [])

  //Case user not logged
  useEffect(() => {
    if (message && !authenticated && !loading) {
      showAlert(message.message, message.category);
      // eslint-disable-next-line
    }
  }, [message]);

  return (
    <div className="producto">
      <label>{product.name}</label>
      <p>{product.description}</p>
      <label>Precio: &#8353;{product.price}&nbsp;</label>
      <button
        type="button"
        className="btn btn-agregar btn-block"
        onClick={() =>
          addProductToCart({
            product: product._id,
            qty: 1,
            color: "Default",
            size: "Default",
          })
        }
      >
        Agregar <img src={ShoppingCart} alt="none" width="10%" height="10%" />
      </button>
    </div>
  );
};

export default Product;
