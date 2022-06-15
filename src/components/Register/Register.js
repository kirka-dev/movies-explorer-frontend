import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { nameValidation, emailValidation, passwordValidation } from "../../utils/Validation";
import AuthApi from "../../utils/AuthApi";
import Input from "../Shared/Input/Input";
import Logotype from "../Shared/Logotype/Logotype";
import Alert from "../Shared/Alert/Alert";

import './Register.scss'

function Register(props) {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorName, setErrorName] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState(true);
  const [errorPassword, setErrorPassword] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const { currentUser, isLoggedIn } = React.useContext(UserContext);

  function handleChangeName(e) {
    const name = e.target.value;

    setName(name);
    setErrorName(nameValidation(name));
  }

  function handleChangeEmail(e) {
    const email = e.target.value;

    setEmail(email);
    setErrorEmail(emailValidation(email));
  }

  function handleChangePassword(e) {
    const password = e.target.value;

    setPassword(password);
    setErrorPassword(passwordValidation(password));
  }

  function handleSubmit(e) {
    e.preventDefault();

    AuthApi
      .register(name, email, password)
      .then((res) => {
        AuthApi
          .login(email, password)
          .then((res) => {
            isLoggedIn.setValue(true);
            currentUser.setValue(res);
            localStorage.setItem("jwt", res.token);
            history.push('/movies');
            props.setSavedMovies();
          })
          .catch((err) => {
            setMessage(() => {
              setTimeout(() => {
                setMessage('')
              }, 1500);
              return err;
            });
            history.push('/login');
          });
      })
      .catch((err) => {
        setMessage(() => {
          setTimeout(() => {
            setMessage('')
          }, 1500);
          return err;
        });
      });
  }

  return (
    <main>
      <section className="register">
        <div className="register__container container">
          <Logotype className="register__logotype" />
          <h1 className="register__greetings">Добро пожаловать!</h1>
          <form className="register__register-form register-form" onSubmit={handleSubmit}>
            <div className="register-form__body">
              <Input
                className="register-form__input"
                label="Имя"
                name="name"
                change={handleChangeName}
                value={name}
                error={errorName}
              />
              <Input
                className="register-form__input"
                label="E-mail"
                name="email"
                type="text"
                change={handleChangeEmail}
                value={email}
                error={errorEmail}
              />
              <Input
                className="register-form__input"
                label="Пароль"
                name="password"
                type="password"
                autocomplete="off"
                change={handleChangePassword}
                value={password}
                error={errorPassword}
              />
            </div>
            <div className="register-form__footer">
              <button
                className="register-form__button"
                type="submit"
                disabled={!errorName.status || !errorEmail.status || !errorPassword.status}
              >
                Зарегистрироваться
              </button>
              <p className="register-form__text">Уже зарегистрированы? <Link className="register-form__link" to="/login">Войти</Link></p>
            </div>
          </form>
        </div>
      </section>
      <Alert text={message} />
    </main>
  );
}

export default Register;
