import cn from 'classnames';
import styles from '../styles/Input.module.scss';
import type {InputWithoutLabelRequiredProps} from '../types';

export function InputWithoutLabel(props: InputWithoutLabelRequiredProps) {
  const {variant, bold} = props;

  return <input className={cn(styles.root, styles.input, styles[variant], bold && styles.bold)} {...props} />;
}
