import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import NoResult from '../NoResult/NoResult.jsx';
import cards from '../../utils/cards';

function App() {

  const navigate = useNavigate();
  const regexpEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleRegister() {
    navigate('/signin');
  }

  function handleLogin() {
    setLoggedIn(true);
    navigate('/profile');
  }

  function handleLogout() {
    setLoggedIn(false);
    navigate('/');
  }

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className="page">

      <Routes>

        <Route path="/" element={
          <>
            <Header
              isLoggedIn={loggedIn} />
            <Main />
            <Footer />
          </>
        } />

        <Route path="/movies" element={
          <>
            <Header
              isLoggedIn={loggedIn} />
            <Movies cards={cards} />
            <Footer />
          </>
        } />

        <Route path="/saved-movies" element={
          <>
            <Header
              isLoggedIn={loggedIn} />
            <SavedMovies
              cards={cards} />
            <Footer />
          </>
        } />

        <Route path="/profile" element={
          <>
            <Header
              isLoggedIn={loggedIn}
            />
            <Profile
              handleLogout={handleLogout}
            />
          </>
        } />

        <Route path="/signin" element={<Login
          regexpEmail={regexpEmail}
          handleLogin={handleLogin}
        />} />

        <Route path="/signup" element={<Register
          regexpEmail={regexpEmail}
          handleRegister={handleRegister}
        />} />

        <Route path="*" element={<NoResult
          goBack={goBack} />} />

      </Routes>
      
    </div>
  );
}

export default App;
