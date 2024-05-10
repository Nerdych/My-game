import styles from '../styles/Input.module.scss';
import type {InputNativeProps} from '../types';

export function InputWithoutLabel(props: InputNativeProps) {
  return <input className={styles.input} {...props} />;
}
