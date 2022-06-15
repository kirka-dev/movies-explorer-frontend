import React from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import AuthApi from "../../utils/AuthApi";
import MainApi from "../../utils/MainApi";
import Storage from "../../utils/StorageHandling";
import Header from "../Shared/Header/Header";
import Alert from "../Shared/Alert/Alert";

import "./Profile.scss";

function Profile(props) {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const { currentUser, isLoggedIn } = React.useContext(UserContext);

  React.useEffect(() => {
    setName(currentUser.value.name);
    setEmail(currentUser.value.email);
  }, [currentUser.value.name, currentUser.value.email]);

  function handleChangeName(e) {
    const name = e.target.value;

    setName(name);
  }

  function handleChangeEmail(e) {
    const email = e.target.value;

    setEmail(email);
  }

  function handleUpdateUser(e) {
    e.preventDefault();

    MainApi
      .updateUser(name, email)
      .then((res) => {
        currentUser.setValue(res.data);

        setMessage(() => {
          setTimeout(() => {
            setMessage('')
          }, 1500);
          return 'Профиль сохранён';
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

  function handleSignout() {
    AuthApi
      .signout()
      .then(() => {
        isLoggedIn.setValue(false);
        localStorage.removeItem("jwt");
        Storage.clearMovies();
        history.push('/');
      });
  }

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <div className="profile__container container">
            <h1 className="profile__greetings">Привет, {name}!</h1>
            <form className="profile__edit-form edit-form" onSubmit={handleUpdateUser}>
              <div className="edit-form__body">
                <div className="edit-form__input">
                  <label htmlFor="name">Имя</label>
                  <input value={name} onChange={handleChangeName} id="name" />
                </div>
                <div className="edit-form__input">
                  <label htmlFor="email">E-mail</label>
                  <input value={email} onChange={handleChangeEmail} id="email" />
                </div>
              </div>
              <div className="edit-form__footer">
                <button
                  className="edit-form__button"
                  disabled={currentUser.value.name === name && currentUser.value.email === email}
                >
                  Редактировать
                </button>
                <button className="edit-form__button edit-form__button_signout" type="button" onClick={handleSignout}>Выйти из аккаунта</button>
              </div>
            </form>
          </div>
        </section>
        <Alert text={message} />
      </main>
    </>
  );
}

export default Profile;
