import React, { useState, useContext, useEffect } from "react";
import ShoppingContext from "../../context/shopping/shoppingContext";

const ProductCart = ({ shopping }) => {
  const { product } = shopping;
  const shoppingContext = useContext(ShoppingContext);
  const { deleteShopping, updateShopping } = shoppingContext;

  const [show, setShow] = useState(false);

  //Add one more to the qty available
  let qty = product.qtyInventory ? product.qtyInventory + 1 : 0;

  const qtyAvailable = Array.from(Array(qty).keys());

  //Hide the dropdown
  const handleClick = (event) => {
    if (show) {
      setShow(false);
    }
  };

  //listen click event
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  //Show the qty available for update the shopping
  const showDropdown = () => {
    setShow(true);
  };

  //Ypdate qty of shopping if qty is 0 delete that shopping
  const handleClickQty = (shopping, qty) => {
    if (qty === 0) {
      deleteShopping(shopping._id);
      return;
    }

    shopping.qty = qty;

    updateShopping(shopping._id, shopping);
  };

  return (
    <div className="producto">
      <label>{product.name}</label>
      <p>{product.description}</p>
      <label>Precio: &#8353;{product.price}&nbsp;</label>
      <button className="dropbtn" onClick={() => showDropdown()}>
        <span>
          Cant.:<span>{shopping.qty}</span>
        </span>
      </button>
      {show ? (
        <div id="myDropdown" className="dropdown-content">
          {qtyAvailable.map((qty) => (
            <a
              key={qty}
              onClick={() => handleClickQty(shopping, qty)}
              className={qty === shopping.qty ? "active" : ""}
            >
              {qty === 0 ? "0 (Eliminar)" : qty}
            </a>
          ))}
        </div>
      ) : null}
      <button
        type="button"
        className="btn btn-eliminar btn-block"
        onClick={() => deleteShopping(shopping._id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProductCart;
