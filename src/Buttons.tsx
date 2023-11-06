import Svg from 'circle-heat--com.svg';
import styles from './index.module.scss';

const Button = ({children}: any) => {
  return (
    <button type="button" className={styles.a}>
      {children}
      <Svg />
    </button>
  );
};

export default Button;
