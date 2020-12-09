import { SET_USER_AUTH_STATUS } from './actionsTypes';

export const setUserAuthStatus = (status: boolean) => {
  return {
    type: SET_USER_AUTH_STATUS,
    payload: { status },
  } as const;
};
