import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.scss';
import { fire } from '../../firebase/fire';
import 'firebase/firestore';
import 'firebase/auth';
import { getMessages } from '../../redux/reducers/messagesReducer/actions';
import { TApp } from '../../redux/reducers/rootReducer';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { sendMessage } from '../../redux/reducers/messagesReducer/asyncActions';

type TData = { message: string };

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: TApp) => state.messages);
  const { isAuthed } = useSelector((state: TApp) => state.auth);
  const { register, handleSubmit, errors, reset } = useForm<TData>();
  const username = useSelector((state: TApp) => state.username);
  const history = useHistory();
  const chatMessages = useRef<HTMLUListElement>(null!);

  useEffect(() => {
    if (isAuthed === false) {
      alert('u`re not authed');
      history.push('/login');
    }

    chatMessages.current.scrollTop = chatMessages.current.scrollHeight;

    fire
      .firestore()
      .collection('messages')
      .orderBy('time', 'asc')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => doc.data());
        dispatch(getMessages(messages));
      });
  }, []);

  useEffect(() => {
    chatMessages.current.scrollTop = chatMessages.current.scrollHeight;
  }, [messages]);

  const submitHandler = handleSubmit(data => {
    dispatch(sendMessage(data.message, username));

    reset();
  });

  return (
    <section className="chat">
      <div className="chat__body">
        <div className="chat__profile">profile</div>
        <ul className="chat__messages" ref={chatMessages}>
          {messages.map(message => {
            return (
              <li key={message.id} className={message.username === username ? '' : '_active'}>
                {message.username}: {message.title}
              </li>
            );
          })}
        </ul>
        <form className="chat__form" onSubmit={submitHandler}>
          <input
            className={`chat__input input ${errors.message ? 'invalid' : ''}`}
            name="message"
            placeholder="your message"
            autoComplete="off"
            ref={register({ required: true })}
          />
          <Button className="chat__button">Send</Button>
        </form>
      </div>
    </section>
  );
};
