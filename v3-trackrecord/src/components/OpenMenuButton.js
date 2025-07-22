import React from 'react';
import openMenu from './../assets/icons/ic-menu-black.svg';

function OpenMenuButton({ isNavOpen, toggleNav }) {
    if (isNavOpen) return null;

    return (
        <button onClick={toggleNav} id="open_menu">
            <img src={openMenu} alt="Open side menu" />
        </button>
    );
}

export default OpenMenuButton;