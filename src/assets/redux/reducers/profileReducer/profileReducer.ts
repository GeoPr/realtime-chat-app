import { SET_PROFILE_IMAGE } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';

type ActionsTypes = TActions<typeof actions>;

export const profileReducer = (state: string = 'images/profile.png', action: ActionsTypes): any => {
  if (action.type === SET_PROFILE_IMAGE) {
    return action.payload.reference;
  }
  return state;
};
