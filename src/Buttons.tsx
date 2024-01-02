import styles from './index.module.scss';
import Svg from './lol.svg';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {color: string; label: string};

const Button = ({children, color, label}: Props) => {
  return (
    <button type="button" className={styles.a}>
      <span style={{color}}>{label}</span>
      {children}
      <Svg />
    </button>
  );
};

export default Button;
