import { SET_USER_NAME } from './actionsTypes';

export const setUsername = (newUsername: string) => ({
  type: SET_USER_NAME,
  payload: { newUsername },
});
