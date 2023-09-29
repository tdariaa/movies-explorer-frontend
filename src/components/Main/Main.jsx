import React from 'react';


import NavTab from '../NavTab/NavTab.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';

function Main() {

  return (
    <>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );

}

export default Main;