import React, { useContext, useEffect } from "react";
import Header from "../layout/Header";
import ProductContext from "../../context/products/productContext";
import AlertContext from "../../context/alerts/alertContext";
import Product from "./Product";

const Products = ({ history }) => {
  const productContext = useContext(ProductContext);
  const { products, getAllProducts } = productContext;

  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <Header history={history} />
        {alert ? (
          <div className={`alerta ${alert.category}`}>{alert.message}</div>
        ) : null}
        <div className="productos">
          <h2>Productos</h2>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
