import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import AuthContext from '../../context/authentication/authContext';

const Products = () => {

  const authContext = useContext(AuthContext);
  const { authUser } = authContext;

  useEffect(() => {
    authUser();
  }, []);
  
  return (
    <div className="contenedor-app">
      <div className="seccion-principal">
        <Header />
        <main>

        </main>
      </div>
    </div>
  );
}
 
export default Products;