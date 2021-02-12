import React, { useContext, useEffect } from "react";
import Header from "../layout/Header";
import ShoppingContext from "../../context/shopping/shoppingContext";
import ProductCart from "./ProductCart";

const ShoppingCart = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { shoppings, getShoppings } = shoppingContext;

  useEffect(() => {
    getShoppings();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <Header />
        <h2>Carrito</h2>
        {shoppings.length > 0 ? (
          <div className="productos">
            {shoppings.map((shopping) => (
              <ProductCart key={shopping._id} shopping={shopping} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Carrito vacio</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
