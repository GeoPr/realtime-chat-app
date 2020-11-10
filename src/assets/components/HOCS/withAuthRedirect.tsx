import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TApp } from '../../redux/reducers/rootReducer';

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {
  const ReturnableComponent: React.FC<T> = props => {
    const { isAuthed } = useSelector((state: TApp) => state.auth);

    if (isAuthed === false) {
      alert('u`re not authed');
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  return ReturnableComponent;
}
