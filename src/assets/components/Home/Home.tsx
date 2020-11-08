import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <section
      className="home"
      style={{ background: 'url(images/chat-bg.jpg) center center / cover no-repeat' }}>
      <div className="home__container _container">
        <div className="home__body">
          <div className="home__title">Awesome realtime chat</div>
          <div className="home__subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi natus molestiae ullam
            dolorem eveniet. Placeat libero, deserunt fugiat cum officia numquam omnis corporis,
            necessitatibus a, qui et quidem ducimus quod?
          </div>
          <Button className="home__button">
            <Link to="/login">Try it for free now!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
