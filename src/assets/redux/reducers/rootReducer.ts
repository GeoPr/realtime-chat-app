import { usernameReducer } from './usernameReducer/usernameReducer';
import { messagesReducer } from './messagesReducer/messagesReducer';
import { loaderReducer } from './loaderReducer/loaderReducer';
import { authReducer } from './authReducer/authReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  messages: messagesReducer,
  username: usernameReducer,
});

export type TApp = ReturnType<typeof rootReducer>;

type TProperties<T> = T extends {
  [key: string]: infer U;
}
  ? U
  : never;

export type TActions<
  T extends {
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<TProperties<T>>;
