import { GET_MESSAGES } from './actionsTypes';

export const getMessages = (messages: any) => {
  return {
    type: GET_MESSAGES,
    payload: { messages },
  } as const;
};
