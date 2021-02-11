import React, {useState} from 'react';
import Login from './components/Login';
import Product from './components/Product';



function App() {

  const [products, setProducts] = useState([{
    name:'Camisa Queen',
    price: 2500.00,
    description: 'Camisa de la banda de rock Queen',
    qtyInventary: 15
  }, {
    name:'Camisa Queen',
    price: 2500.00,
    description: 'Camisa de la banda de rock Queen',
    qtyInventary: 15
  }]);

  const [goLogin, setGoLogin] = useState(false);

  return (
    <div>
      <h1>Tienda Virtual</h1>
      <div>
        {goLogin ? (
          <Login />
        ) : (
          products.map((product) => <Product product={product} />)
        )}
      </div>
    </div>
  );
}

export default App;
