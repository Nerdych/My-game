import cn from 'classnames';
import styles from '../styles/Input.module.scss';
import type {InputComponentProps} from '../types';

export function InputWithLabel(props: InputComponentProps) {
  const {label, className, type = 'text', ...otherProps} = props;

  return (
    <label className={styles.root}>
      <input className={cn(styles.input, styles.withLabel, className)} type={type} {...otherProps} />
      <span className={styles.text}>{label}</span>
    </label>
  );
}
