//@todo: the login and Logout should change depending if the user is autorized.
//like: if user is autorized this the shown menu is "Logout", otherwise it's "Login"

import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Login({isNavOpen, toggleNav}) {
  return (
    <section id="login">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Login</p>
    </section>
  )
}

export default Login