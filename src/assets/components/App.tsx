import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { TApp } from '../redux/reducers/rootReducer';
import './App.scss';
import { Chat } from './Chat/Chat';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Loader } from './Loader/Loader';
import { Login } from './Login/Login';
import { SignUp } from './SignUp/SignUp';

const App: React.FC = () => {
  const { isVisible } = useSelector((state: TApp) => state.loader);

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </main>
      {isVisible && <Loader />}
    </div>
  );
};

export default App;
