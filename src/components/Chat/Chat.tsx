import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.scss';
import { fire } from '../../firebase/fire';
import 'firebase/firestore';
import 'firebase/auth';
import { getMessages } from '../../redux/reducers/messagesReducer/actions';
import { TApp } from '../../redux/reducers/rootReducer';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { sendMessage } from '../../redux/reducers/messagesReducer/asyncActions';
import { withAuthRedirect } from '../HOCS/withAuthRedirect';

type TData = { message: string };

const ChatComponent: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: TApp) => state.messages);
  const { register, handleSubmit, errors, reset } = useForm<TData>();
  const username = useSelector((state: TApp) => state.username);
  const chatMessages = useRef<HTMLUListElement>(null!);
  const profileImage = useSelector((state: TApp) => state.profile);

  useEffect(() => {
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

  const checkUsername = (name: string) => {
    return name === username || name === JSON.parse(localStorage.getItem('username')!)
      ? true
      : false;
  };

  return (
    <section className="chat">
      <div className="chat__body">
        <ul className="chat__messages" ref={chatMessages}>
          {messages.map(message => {
            return (
              <li
                key={message.id}
                className={checkUsername(message.username) === false ? '_active' : ''}>
                <img
                  src={checkUsername(message.username) ? profileImage : 'images/profile.png'}
                  alt=""
                />
                <span>
                  {message.username}: {message.title}
                </span>
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

export const Chat = withAuthRedirect(ChatComponent);
