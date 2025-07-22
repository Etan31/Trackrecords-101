import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Help({isNavOpen, toggleNav}) {
  return (
    <section id="help">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>help</p>
    </section>
  )
}

export default Help