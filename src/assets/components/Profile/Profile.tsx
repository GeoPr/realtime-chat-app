import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setProfileImage } from '../../redux/reducers/profileReducer/actions';
import { TApp } from '../../redux/reducers/rootReducer';
import { setUsername } from '../../redux/reducers/usernameReducer/actions';
import { withAuthRedirect } from '../HOCS/withAuthRedirect';
import './Profile.scss';

const ProfileComponent: React.FC = () => {
  const username = useSelector((state: TApp) => state.username);
  const { isAuthed } = useSelector((state: TApp) => state.auth);
  const dispatch = useDispatch();
  const profileImage = useSelector((state: TApp) => state.profile);

  if (isAuthed === false) {
    alert('u`re not authed');
    return <Redirect to="/login" />;
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const fileReader = new FileReader();

    fileReader.onloadend = e => {
      const reference = e.target?.result!;
      dispatch(setProfileImage(reference));
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <section className="profile">
      <div className="profile__body">
        <div className="profile__block">
          <div className="profile__image">
            <img src={profileImage} alt="" />
            <input
              className="profile__input"
              type="file"
              autoComplete="off"
              accept=".png, .jpg, .jpeg"
              onChange={changeImage}
            />
          </div>
          <input
            className="profile__username"
            type="text"
            value={username}
            onChange={changeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export const Profile = withAuthRedirect(ProfileComponent);
