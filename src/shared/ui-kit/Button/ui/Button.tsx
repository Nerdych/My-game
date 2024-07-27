import cn from 'classnames';
import styles from '../styles/Button.module.scss';
import type {ButtonProps} from '../types';

export const Button = (props: ButtonProps) => {
  const {children, variant = 'accent', size = 'medium', type = 'button', className, ...otherProps} = props;

  return (
    <button className={cn(styles.root, styles[size], styles[variant], className)} type={type} {...otherProps}>
      {children}
    </button>
  );
};
