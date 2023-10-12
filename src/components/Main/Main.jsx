import React from 'react';
import './Main.css'


import NavTab from '../NavTab/NavTab.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';

function Main() {

  return (
    <main className="main">
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );

}

export default Main;