import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Settings({isNavOpen, toggleNav}) {
  return (
    <section id="settings">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Settings</p>
    </section>
  )
}

export default Settings