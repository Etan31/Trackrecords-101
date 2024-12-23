import React, { useState } from 'react';
import './../css/fabMenu.css';

const FABMenu = ({ onAddBudget, onAddTransaction, buttonIcon, buttonLabel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const toggleMenu = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setIsOpen(!isOpen);
        setTimeout(() => setIsAnimating(false), 300); // Match animation duration
      }
    };
  
    return (
      <div className="fab-menu-wrapper">
        <div className={`fab-actions ${isOpen ? 'expand' : 'collapse'}`}>
          {!isAnimating && isOpen && (
            <>
              <button onClick={onAddBudget}>Add Budget</button>
              <button onClick={onAddTransaction}>Add Transaction</button>
            </>
          )}
        </div>
        <button
          id="fabMenu"
          className={`fab-menu ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className={`fab-label ${isOpen ? 'hidden' : ''}`}>
            {buttonLabel}
          </span>
          <img
            src={buttonIcon}
            alt="FAB Icon"
            className={`fab-icon ${isOpen ? 'rotated' : ''}`}
          />
        </button>
      </div>
    );
  };
  
  export default FABMenu;