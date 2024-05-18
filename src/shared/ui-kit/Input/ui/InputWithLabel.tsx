import cn from 'classnames';
import styles from '../styles/Input.module.scss';
import type {InputWithLabelRequiredProps} from '../types';

export function InputWithLabel(props: InputWithLabelRequiredProps) {
  const {label, className, variant, bold, ...otherProps} = props;

  return (
    <label className={cn(styles.root, styles.label)}>
      <input className={cn(styles.input, styles[variant], bold && styles.bold, className)} {...otherProps} />
      <span className={cn(styles.text, styles[variant])}>{label}</span>
    </label>
  );
}
