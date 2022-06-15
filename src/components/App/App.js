import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../404/NotFoundPage";
import ProtectedRoute from "../Shared/ProtectedRoute/ProtectedRoute";
import AuthApi from "../../utils/AuthApi";
import MainApi from "../../utils/MainApi";
import Storage from "../../utils/StorageHandling";

import "./App.scss";

function App() {
  const [value, setValue] = React.useState('');
  const isLoggedIn = React.useMemo(() => ({ value, setValue }), [value]);
  const currentUser = React.useMemo(() => ({ value, setValue }), [value]);

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  function handleCheckToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      AuthApi
        .checkToken(jwt)
        .then((res) => {
          isLoggedIn.setValue(true);
          currentUser.setValue(res);
          setSavedMovies();
        })
        .catch((err) => {
          isLoggedIn.setValue(false);
          console.log(err);
        });
    } else {
      isLoggedIn.setValue(false);
    }
  }

  function setSavedMovies() {
    MainApi
      .getSavedMovies()
      .then((movies) => {
        Storage.setSavedMovies(movies.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <UserContext.Provider value={{ currentUser, isLoggedIn }}>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <ProtectedRoute
          exact
          path="/movies"
          component={Movies}
          isLogin={isLoggedIn.value}
        />
        <ProtectedRoute
          exact
          path="/saved-movies"
          component={SavedMovies}
          isLogin={isLoggedIn.value}
        />
        <ProtectedRoute
          exact
          path="/profile"
          component={Profile}
          isLogin={isLoggedIn.value}
        />
        <ProtectedRoute
          exact
          path="/register"
          component={Register}
          isLogin={!isLoggedIn.value}
          setSavedMovies={setSavedMovies}
        />
        <ProtectedRoute
          exact
          path="/login"
          component={Login}
          isLogin={!isLoggedIn.value}
          setSavedMovies={setSavedMovies}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
