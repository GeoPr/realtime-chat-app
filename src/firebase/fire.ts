import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDiqtR5bx2Vl45yvFnUYE3gBJmrV_dfFv4',
  authDomain: 'realtime-chat-ts.firebaseapp.com',
  databaseURL: 'https://realtime-chat-ts.firebaseio.com',
  projectId: 'realtime-chat-ts',
  storageBucket: 'realtime-chat-ts.appspot.com',
  messagingSenderId: '843346115731',
  appId: '1:843346115731:web:b9d6b1ad75a7f1c8106166',
};

export const fire = firebase.initializeApp(firebaseConfig);
