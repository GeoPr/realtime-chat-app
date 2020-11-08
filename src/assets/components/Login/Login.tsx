import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/reducers/authReducer/asyncActions';
import { IData } from '../../redux/reducers/authReducer/authReducer';
import { Button } from '../Button/Button';
import './Login.scss';

export const Login: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm<IData>();
  const dispatch = useDispatch();

  const submitHandler = handleSubmit(async (data: IData) => {
    await dispatch(login(data));

    reset();

    history.push('/chat');
  });

  return (
    <section className="login">
      <div className="login__container _container">
        <div className="login__body">
          <h4 className="login__title title">Login</h4>
          <form className="login__form form" noValidate onSubmit={submitHandler}>
            <input
              className={`login__input input ${errors.email ? 'invalid' : ''}`}
              type="email"
              placeholder="email"
              name="email"
              autoComplete="off"
              ref={register({ required: true })}
            />
            <input
              className={`login__input input ${errors.password ? 'invalid' : ''}`}
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              ref={register({ required: true })}
            />
            <input
              className={`login__input input ${errors.username ? 'invalid' : ''}`}
              type="text"
              placeholder="your name"
              name="username"
              autoComplete="off"
              ref={register({ required: true })}
            />
            <Button className="login__button">Login</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
