import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Analytics({isNavOpen, toggleNav}) {
  return (
    <section id="analytics">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Analytics</p>
    </section>
  )
}

export default Analytics