import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Notifications({isNavOpen, toggleNav}) {
  return (
    <section id="notifications">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Notifications</p>
    </section>
  )
}

export default Notifications