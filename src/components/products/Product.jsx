import React, { useEffect } from "react";
import ShoppingCart from "../../assets/shopping-cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { authUserAction } from "../../actions/authActions";
import { addProductToCartAction } from '../../actions/shoppingActions';
import { message, Card } from 'antd';

const Product = ({ product }) => {
  const { authenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //Get user info
  useEffect(() => {
    dispatch(authUserAction());
    // eslint-disable-next-line
  }, []);

  const addProduct = async (product) => {
    if(authenticated) {
      message.loading({ 
        content: 'Loading...', 
        key: 'updatable',
        className: 'alerta-ok'
      });
    }

    await dispatch(addProductToCartAction(product));
    
    if(authenticated) {
      message.success({
        content: 'Producto Agregado',
        className: 'alerta-ok',
        key: 'updatable'
      });
    }
  };

  return (
    <Card
      className="producto" 
      title={product.name} 
      bordered={false}>
      <p>{product.description}</p>
      <label>Precio: &#8353;{product.price}&nbsp;</label>
      <button
        type="button"
        className="btn btn-agregar btn-block"
        onClick={() =>
          addProduct({
            product: product._id,
            qty: 1,
            color: "Default",
            size: "Default",
          })
        }
      >
        Agregar <img src={ShoppingCart} alt="none" width="10%" height="10%" />
      </button>
    </Card>
  );
};

export default Product;
