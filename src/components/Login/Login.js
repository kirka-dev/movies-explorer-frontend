import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import AuthApi from "../../utils/AuthApi";
import MainApi from "../../utils/MainApi";
import Storage from "../../utils/StorageHandling";
import { emailValidation, passwordValidation } from "../../utils/Validation";
import Input from "../Shared/Input/Input";
import Logotype from "../Shared/Logotype/Logotype"

import './Login.scss'

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState(true);
  const [errorPassword, setErrorPassword] = React.useState(true);
  const { currentUser, isLoggedIn } = React.useContext(UserContext);

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
      .login(email, password)
      .then((res) => {
        isLoggedIn.setValue(true);
        currentUser.setValue(res);
        localStorage.setItem("jwt", res.token);
        history.push('/movies');
        props.setSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main>
      <section className="login">
        <div className="login__container container">
          <Logotype className="login__logotype" />
          <h1 className="login__greetings">Рады видеть!</h1>
          <form className="login__login-form login-form" onSubmit={handleSubmit}>
            <div className="login-form__body">
              <Input
                className="login-form__input"
                label="E-mail"
                name="email"
                type="text"
                change={handleChangeEmail}
                value={email}
                error={errorEmail}
              />
              <Input
                className="login-form__input"
                label="Пароль"
                name="password"
                type="password"
                change={handleChangePassword}
                value={password}
                error={errorPassword}
              />
            </div>
            <div className="login-form__footer">
              <button
                className="login-form__button"
                type="submit"
                disabled={!errorEmail.status || !errorPassword.status}
              >
                Войти
              </button>
              <p className="login-form__text">Ещё не зарегистрированы? <Link className="login-form__link" to="/register">Регистрация</Link></p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
