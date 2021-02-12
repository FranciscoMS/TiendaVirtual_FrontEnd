import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Register = (props) => {

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/');
    } 
    
    if (message) {
      showAlert(message.msg, message.category);
      // eslint-disable-next-line
    }
  }, [message, authenticated, props.history, showAlert]);

  // State to login
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  });

  // extract user info
  const { name, lastName, email, password, confirm } = user;

  const onChange = (event) => {
    setUser({
          ...user,
          [event.target.name] : event.target.value
      })
  }

  const onSubmit = e => {
    e.preventDefault();

    // Validate empty inputs
    if( name.trim() === '' ||
        lastName.trim() === '' || 
        email.trim() === '' || 
        password.trim() === '' || 
        confirm.trim() === '' ) {
      showAlert('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Password must be at least 6 characters
    if(password.length < 6) {
      showAlert('El password debe ser mayor de 6 caracteres', 'alerta-error');
      return;
    }

    //Two passwords are equals
    if(password !== confirm) {
      showAlert('Los passwords son diferentes', 'alerta-error');
      return;
    }

    registerUser({
      name,
      lastName,
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
        <h1>Registrar una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="lastName">Apellidos</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Apellidos"
              value={lastName}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirmar Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repite tu Password"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/login"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
 
export default Register;