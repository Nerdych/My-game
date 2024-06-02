import cn from 'classnames';
import styles from '../styles/TextField.module.scss';
import type {TextFieldWithLabelRequiredProps} from '../types';

export function TextFieldWithLabel(props: TextFieldWithLabelRequiredProps) {
  const {label, className, variant, bold, ...otherProps} = props;

  return (
    <label className={cn(styles.root, styles.label)}>
      <input className={cn(styles.input, styles[variant], bold && styles.bold, className)} {...otherProps} />
      <span className={cn(styles.text, styles[variant])}>{label}</span>
    </label>
  );
}
