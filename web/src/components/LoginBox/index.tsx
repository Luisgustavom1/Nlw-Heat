import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

const LoginBox: React.FC = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensage</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size='24'/>
        Entrar no github 
      </a>
    </div>
  )
}

export default LoginBox;