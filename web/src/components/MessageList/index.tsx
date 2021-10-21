import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type Message = {
  id: string,
  text: string,
  user: {
    nome: string,
    avatar_url: string
  }
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(res => {
      setMessages(res.data);
      
    })
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt='DoWhile 2021'/>

      <ul className={styles.messageList}>
        { messages.map(message => (
          <li className={styles.message} key={message.id}>
            <p className={styles.messageContent}>{message.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImg}>
                <img src={message.user.avatar_url} alt={message.user.nome}/>
              </div>
              <span>{message.user.nome}</span>
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default MessageList;