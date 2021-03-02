import React, { useEffect } from "react";
import Header from "../layout/Header";
import Product from "./Product";
import { Col, Row, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../../actions/productsActions";

const Products = ({ history }) => {
  // Get state
  const products = useSelector((state) => state.products.products);
  const { authenticated, loading } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
    // eslint-disable-next-line
  }, []);

  //Case user not logged
  useEffect(() => {
    if (error && !authenticated && !loading) {
      message.error({
        content: error.message,
        className: error.category,
      });
      //dispatch(showAlertAction(message.message, message.category));
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <Header history={history} />
        <div className="site-card-wrapper productos">
          <h2>Productos</h2>
          <Row gutter={16}>
            {products.map((product) => (
              <Col key={product._id}>
                <Product key={product._id} product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Products;
