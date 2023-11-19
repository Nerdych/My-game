import styles from './index.module.scss';
import Svg from './lol.svg';

const Button = ({children}: any) => {
  return (
    <button type="button" className={styles.a}>
      {children}
      <Svg />
    </button>
  );
};

export default Button;
