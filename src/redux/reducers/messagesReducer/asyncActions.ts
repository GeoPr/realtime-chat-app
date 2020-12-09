import { fire } from './../../../firebase/fire';
import { ThunkAction } from 'redux-thunk';
import { TActions, TApp } from './../rootReducer';
import * as loaderActions from '../loaderReducer/actions';
import firebase from 'firebase';
import 'firebase/firestore';

type ActionsTypes = TActions<typeof loaderActions>;
type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>;

export const sendMessage = (title: string, username: string): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader());

    try {
      await fire
        .firestore()
        .collection('messages')
        .add({
          id: +Date.now(),
          title,
          username,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        });

      dispatch(loaderActions.hideLoader());
    } catch (e) {
      alert(e.message);
      dispatch(loaderActions.hideLoader());
    }

    dispatch(loaderActions.hideLoader());
  };
};
