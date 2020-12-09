import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TApp } from '../../redux/reducers/rootReducer';
import './Header.scss';

export const Header: React.FC = () => {
  const { isAuthed } = useSelector((state: TApp) => state.auth);
  const profileImage = useSelector((state: TApp) => state.profile);

  return (
    <header className="header">
      <div className="header__body">
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <NavLink to="/" activeClassName="_active" exact>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="_active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="_active">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat" activeClassName="_active">
                Chat
              </NavLink>
            </li>
          </ul>
        </nav>
        {isAuthed && (
          <NavLink
            className="header__profile"
            to="/profile"
            style={{ background: `url(${profileImage}) center center / cover no-repeat` }}>
            Profile
          </NavLink>
        )}
      </div>
    </header>
  );
};
