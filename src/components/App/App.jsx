import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.jsx';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi';

import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import NoResult from '../NoResult/NoResult.jsx';
import Preloader from '../Preloader/Preloader.js'

function App() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [isProfileUpdate, setIsProfileUpdate] = React.useState(false);
  const [isTokenCheck, setIsTokenCheck] = React.useState(true);
  const [loader, setLoader] = React.useState(true);
  const [loadError, setLoadError] = React.useState(false);
  const [isUpdated, setIsUpdated] = React.useState(false);

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch(function (value) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('check');
          localStorage.removeItem('value');
          setLoggedIn(false);
          console.log('Ошибка:' + value);
        })
        .finally(function (value) {
          setIsTokenCheck(false);
        })
    } else {
      setIsTokenCheck(false);
    }
  }

  React.useEffect(() => {
    checkToken();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setLoader(true);
    if (loggedIn) {
      Promise.all([moviesApi.getInitialCards(), mainApi.getSavedMovies(), mainApi.getProfileData()])
        .then(function (value) {
          const [movieCards, savedMovieCards, profileInfo] = value;
          setCards(movieCards);
          setSavedCards(savedMovieCards);
          setCurrentUser(profileInfo);
          setLoadError(false);
        })
        .catch(function (value) {
          console.log('Ошибка:' + value);
          setLoadError(true);
        })
        .finally(function (value) {
          setLoader(false);
        })
    }
  }, [loggedIn])

  function handleRegister(data) {
    const { name, email, password } = data;
    console.log(name, email, password)
    mainApi.register(name, email, password)
      .then((data) => {
        handleAuthorize({ email, password }, "register");
      })
      .catch(function (value) {
        setErrorMessage(true);
        console.log(value);
      })
  }

  function handleAuthorize(data, from) {
    const { email, password } = data;
    mainApi.authorize(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setErrorMessage(false);
        setLoggedIn(true);
        if (from === "signup") {
          navigate('/movies');
        } else {
          navigate('/profile');
        }
      })
      .catch(function (value) {
        setErrorMessage(true);
        console.log(value);
      })
  }

  function handleUpdateProfile({ name, email }) {
    setIsUpdated(true);
    if (loggedIn) {
      mainApi.patchProfileData({ name, email })
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
          updateProfile();
          setIsUpdated(true);
        })
        .catch(function (value) {
          setIsUpdated(false);
          setErrorMessage(true);
          console.log(value);
        })
        .finally(function (value) {
          setIsUpdated(false);
        })
    }
  }

  function handleMovieLike(movieData) {
    mainApi.saveMovie(movieData)
      .then((value) => {
        setSavedCards([value, ...savedCards]);
        console.log(value);
      })
      .catch(function (value) {
        console.log('Ошибка:' + value);
      })
  }

  function handleMovieDelete(movieId) {
    mainApi.deleteMovie(movieId)
      .then((value) => {
        console.log(value);
        setSavedCards(savedCards.filter((card) => card._id !== movieId));
      })
      .catch(function (value) {
        console.log('Ошибка:' + value);
      })
  }

  function handleLogout() {
    mainApi.logout();
    localStorage.removeItem('jwt');
    localStorage.removeItem('check');
    localStorage.removeItem('value');
    setLoggedIn(false);
    navigate('/');
  }

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function resetError() {
    setErrorMessage(false);
  }

  function updateProfile() {
    setIsProfileUpdate(!isProfileUpdate);
  }

  return (
    <div className="page">
      {isTokenCheck ? <Preloader /> :
        <CurrentUserContext.Provider value={currentUser}>

          <Routes>

            <Route path="/signup" element={<Register
              handleRegister={handleRegister}
              errorMessage={errorMessage}
              resetError={resetError}
            />} />

            <Route path="/signin" element={<Login
              handleAuthorize={handleAuthorize}
              errorMessage={errorMessage}
              resetError={resetError}
            />} />

            <Route path="/" element={
              <>
                <Header isLoggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            } />

            <Route path="/movies" element={
              <>
                {loggedIn && <Header isLoggedIn={loggedIn} />}
                <ProtectedRouteElement element={Movies} loggedIn={loggedIn}
                  cards={cards}
                  savedCards={savedCards}
                  handleMovieLike={handleMovieLike}
                  handleMovieDelete={handleMovieDelete}
                  loader={loader}
                  loadError={loadError} />
                {loggedIn && <Footer />}
              </>
            } />

            <Route path="/saved-movies" element={
              <>
                {loggedIn && <Header isLoggedIn={loggedIn} />}
                <ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn}
                  savedCards={savedCards}
                  handleMovieDelete={handleMovieDelete}
                  loader={loader} />
                {loggedIn && <Footer />}
              </>
            } />

            <Route path="/profile" element={
              <>
                {loggedIn && <Header isLoggedIn={loggedIn} />}
                <ProtectedRouteElement element={Profile} loggedIn={loggedIn}
                  handleLogout={handleLogout}
                  handleUpdateProfile={handleUpdateProfile}
                  errorMessage={errorMessage}
                  resetError={resetError}
                  updateProfile={updateProfile}
                  isProfileUpdate={isProfileUpdate}
                  isUpdated={isUpdated} />
              </>
            } />

            <Route path="*" element={<NoResult
              goBack={goBack} />} />

          </Routes>



        </CurrentUserContext.Provider>
      }
    </div>
  );
}

export default App;
