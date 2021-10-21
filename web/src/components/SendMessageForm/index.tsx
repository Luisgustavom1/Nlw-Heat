import { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import AuthContext from '../../context/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext);
    const [message, setMessage] = useState('');

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();

        if (!message.trim()) {
            return;
        }

        await api.post('messages', {message});
        setMessage('');        
    };

    return (
        <div className={styles.sendMessagaFormWrapper}>
            <button className={styles.signOutButton} onClick={signOut}>
                <VscSignOut size='32'/>
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img 
                        src={user?.avatar_url}
                        alt={user?.name}
                    />
                </div>
                <strong className={styles.userName}>
                    {user?.name}
                </strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size='16'/>
                    {user?.login}
                </span>
            </header>

            <form 
                onSubmit={handleSendMessage}
                className={styles.sendMessageForm}>
                <label htmlFor='message'>
                    Messagens
                </label>
                <textarea
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    name='message'
                    id='message'
                    placeholder='Qual sua expectativa para o evento?'
                />
                
                <button 
                    type='submit'
                    >Enviar mensagem</button>
            </form>
        </div>
    );
}