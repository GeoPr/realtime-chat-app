import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../redux/reducers/authReducer/asyncActions';
import { IData } from '../../redux/reducers/authReducer/authReducer';
import { Button } from '../Button/Button';
import './SignUp.scss';

export const SignUp: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const submitHandler = handleSubmit((data: IData) => {
    const isUserSignedInSuccessfully = dispatch(signUp(data));

    reset();

    if (!!isUserSignedInSuccessfully) history.push('/login');
  });

  return (
    <section className="signup">
      <div className="signup__container _container">
        <div className="signup__body">
          <h4 className="signup__title title">Sign up</h4>
          <form className="signup__form form" noValidate onSubmit={submitHandler}>
            <input
              className={`signup__input input ${errors.email ? 'invalid' : ''}`}
              type="email"
              placeholder="email"
              name="email"
              autoComplete="off"
              ref={register({ required: true })}
            />
            <input
              className={`signup__input input ${errors.password ? 'invalid' : ''}`}
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              ref={register({ required: true })}
            />
            <Button className="signup__button">Sign Up</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
