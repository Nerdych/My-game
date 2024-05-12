import cn from 'classnames';
import styles from '../styles/Input.module.scss';
import type {InputRequiredProps} from '../types';

export function InputWithoutLabel(props: InputRequiredProps) {
  const {variant, bold} = props;

  return <input className={cn(styles.root, styles.input, styles[variant], bold && styles.bold)} {...props} />;
}
