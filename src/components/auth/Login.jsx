import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import ShoppingContext from "../../context/shopping/shoppingContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, login } = authContext;

  //Case password wrong or user doesn't exist
  useEffect(() => {
    if (authenticated) {
      props.history.push('/');
    }
    
    if (message) {
      showAlert(message.msg, message.category);
      // eslint-disable-next-line
    }
  }, [message, authenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  //Extract user info
  const {email, password} = user;

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    // Validation for empty inputs
    if(email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alerta-error');
    }

    login({
      email,
      password
    });
  }

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.message}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
          </div>
        </form>
        <Link  to={'/register'} className='enlace-cuenta'>
          Registrarse
        </Link>
      </div>
    </div>
  );
}
 
export default Login;