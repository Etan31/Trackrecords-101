import React from 'react';
import OpenMenuButton from '../components/OpenMenuButton';

function Transactions({isNavOpen, toggleNav}) {
  return (
    <section id="transactions">
      <header>
        <OpenMenuButton isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      </header>
      <p>Transaction</p>
    </section>
  )
}

export default Transactions