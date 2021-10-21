import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import AuthContext from '../../context/auth';
import { api } from '../../services/api';

import styles from './styles.module.scss';

const LoginBox: React.FC = () => {
  const { signInUrl } = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensage</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size='24'/>
        Entrar no github 
      </a>
    </div>
  )
}

export default LoginBox;