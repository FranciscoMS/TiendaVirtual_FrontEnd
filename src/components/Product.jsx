import React from 'react';

const Product = ({ product }) => {
  const {name, description, price} = product
  return (
    <div className='product'>
      <h3>{name}</h3>
      <p>{description}</p>
      <label>&#8353;{price}</label>
      <button type="button">Agregar al carrito</button>
    </div>
  );
}
 
export default Product;