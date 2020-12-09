import { GET_MESSAGES } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';

type ActionsTypes = TActions<typeof actions>;

export interface IMessage {
  id: number;
  title: string;
  username: string;
}

type TInitalState = Array<IMessage>;

const initalState: TInitalState = [];

export const messagesReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  if (action.type === GET_MESSAGES) {
    return action.payload.messages;
  }

  return state;
};
