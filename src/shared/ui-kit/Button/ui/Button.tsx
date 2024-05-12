import cn from 'classnames';
import styles from '../styles/Button.module.scss';
import type {ButtonProps} from '../types';

export function Button(props: ButtonProps) {
  const {children, variant = 'accent', size = 'medium', type = 'button', ...otherProps} = props;

  return (
    <button className={cn(styles.root, styles[size], styles[variant])} type={type} {...otherProps}>
      {children}
    </button>
  );
}
