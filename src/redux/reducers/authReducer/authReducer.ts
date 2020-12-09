import { SET_USER_AUTH_STATUS } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';

export interface IData {
  email: string;
  password: string;
  username: string;
}

interface IInitalState {
  isAuthed: boolean;
}

const initalState: IInitalState = { isAuthed: false };

type ActionsTypes = TActions<typeof actions>;

export const authReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  if (action.type === SET_USER_AUTH_STATUS) {
    return { ...state, isAuthed: action.payload.status };
  }

  return state;
};
