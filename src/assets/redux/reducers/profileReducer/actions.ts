import { SET_PROFILE_IMAGE } from './actionsTypes';

export const setProfileImage = (reference: string | ArrayBuffer | null) => ({
  type: SET_PROFILE_IMAGE,
  payload: { reference },
});
