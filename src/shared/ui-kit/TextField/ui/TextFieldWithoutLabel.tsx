import cn from 'classnames';
import styles from '../styles/TextField.module.scss';
import type {TextFieldWithoutLabelRequiredProps} from '../types';

export function TextFieldWithoutLabel(props: TextFieldWithoutLabelRequiredProps) {
  const {variant, bold, ...otherProps} = props;

  return <input className={cn(styles.root, styles.input, styles[variant], bold && styles.bold)} {...otherProps} />;
}
