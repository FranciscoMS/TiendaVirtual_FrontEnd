import React, { useEffect } from "react";
import Header from "../layout/Header";
import { Empty, Row, Col } from 'antd';
import ProductCart from "./ProductCart";

//Action Redux
import { useSelector, useDispatch } from "react-redux";
import { getShoppingsAction } from "../../actions/shoppingActions";

const ShoppingCart = () => {
  const { shoppings } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingsAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <Header />
        {shoppings.length > 0 ? (
          <div className="site-card-wrapper productos">
            <Row gutter={16}>
              {shoppings.map((shopping) => (
                <Col key={shopping._id}>
                  <ProductCart key={shopping._id} shopping={shopping} />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <Empty description={
            <span>
              Carrito Vacio
            </span>
          } />
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
