import styles from '../styles/Input.module.scss';
import type {InputNativeProps} from '../types';

export function InputWithoutLabel(props: InputNativeProps) {
  const {type = 'text'} = props;

  return <input className={styles.input} type={type} {...props} />;
}
