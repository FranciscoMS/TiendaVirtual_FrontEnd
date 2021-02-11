import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

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
      console.log('campos requeridos');
    }
  }

  return (
    <div className="form-usuario">
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