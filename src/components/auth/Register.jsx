import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  // State to login
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  // extract user info
  const { name, email, password, confirm } = user;

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
        email.trim() === '' || 
        password.trim() === '' || 
        confirm.trim() === '' ) {
      console.log("Campos requeridos");
      return;
    }

    // Password must be at least 6 characters
    if(password.length < 6) {
      console.log("Password mayor de 6 digitos");
      return;
    }

    //Two passwords are equals
    if(password !== confirm) {
      console.log("Passwords diferentes");
      return;
    }
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

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
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
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

        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
 
export default Register;