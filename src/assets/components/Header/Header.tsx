import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__body">
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
            <li>
              <NavLink to="/chat">Chat</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
