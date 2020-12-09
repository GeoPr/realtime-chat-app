import { SET_USER_NAME } from './actionsTypes';
import { TActions } from '../rootReducer';
import * as actions from './actions';

type ActionsTypes = TActions<typeof actions>;

export const usernameReducer = (state: string = 'unknown user', action: ActionsTypes): string => {
  if (action.type === SET_USER_NAME) {
    return action.payload.newUsername;
  }

  return state;
};
