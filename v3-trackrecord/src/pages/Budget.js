import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Budget({isNavOpen, toggleNav}) {
  return (
        <section id="budget">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Budget</p>
    </section>
  )
}

export default Budget