import { setUsername } from './../usernameReducer/actions';
import { fire } from './../../../firebase/fire';
import 'firebase/auth';
import { TActions, TApp } from './../rootReducer';
import { IData } from './authReducer';
import * as loaderActions from '../loaderReducer/actions';
import * as actions from './actions';
import * as usernameActions from '../usernameReducer/actions';
import { ThunkAction } from 'redux-thunk';

type ActionsTypes = TActions<typeof loaderActions | typeof actions | typeof usernameActions>;
type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>;

export const login = (data: IData): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader());

    try {
      await fire.auth().signInWithEmailAndPassword(data.email, data.password);
      dispatch(setUsername(data.username));

      dispatch(actions.setUserAuthStatus(true));

      dispatch(loaderActions.hideLoader());
    } catch (e) {
      alert(e.message);

      dispatch(actions.setUserAuthStatus(false));

      dispatch(loaderActions.hideLoader());
    }
  };
};

export const signUp = (data: IData): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader());

    try {
      await fire.auth().createUserWithEmailAndPassword(data.email, data.password);

      dispatch(actions.setUserAuthStatus(false));

      dispatch(loaderActions.hideLoader());
    } catch (e) {
      alert(e.message);

      dispatch(actions.setUserAuthStatus(false));

      dispatch(loaderActions.hideLoader());
    }
  };
};
