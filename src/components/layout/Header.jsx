import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, authUser, logout } = authContext;

  useEffect(() => {
    authUser();
  }, []);
  
  return (
    <header className="app-header">
      { user ? <p className="nombre-usuario">Hola <span>{`${user.name} ${user.lastName}`}</span></p> : null }
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logout()}
        >Cerrar Sesión</button>
      </nav>
    </header>
  );
}
 
export default Header;