import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../actions/authActions";
import { message } from 'antd';

const Login = (props) => {
  const { error, authenticated } = useSelector( state => state.auth );
  const { alert } = useSelector( state => state.alert );
  const dispatch = useDispatch();

  //Case password wrong or user doesn't exist
  useEffect(() => {
    if (authenticated) {
      props.history.push("/");
    }

    if (error) {
      message.error({
        content: error.msg,
        className: error.category,
      });
      //dispatch(showAlertAction(message.msg, message.category));
    }
    // eslint-disable-next-line
  }, [error, authenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Extract user info
  const { email, password } = user;

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Validation for empty inputs
    if (email.trim() === "" || password.trim() === "") {
      //dispatch(showAlertAction("Todos los campos son obligatorios", "alerta-error"));
      message.error("Todos los campos son obligatorios");
      return;
    }

    dispatch(loginAction({
      email,
      password,
    }));
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.message}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"/register"} className="enlace-cuenta">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Login;
