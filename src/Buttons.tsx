import styles from './index.module.scss';
import Svg from '../public/circle-heat-svgrepo-com.svg';

const Button = () => {
  return <button className={styles.a}>{<Svg />}</button>;
};

export default Button;
