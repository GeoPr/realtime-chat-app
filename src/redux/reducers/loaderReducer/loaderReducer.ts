import { SHOW_LOADER, HIDE_LOADER } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';

interface IInitalState {
  isVisible: boolean;
}

const initalState: IInitalState = {
  isVisible: false,
};

type ActionsTypes = TActions<typeof actions>;

export const loaderReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return { ...state, isVisible: true };
    }

    case HIDE_LOADER: {
      return { ...state, isVisible: false };
    }

    default:
      return state;
  }
};
