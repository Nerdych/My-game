import cn from 'classnames';
import styles from '../styles/Footer.module.scss';
import type {FC} from 'react';
import type {FooterProps} from '../types';

const Footer: FC<FooterProps> = (props) => {
  const {children, className} = props;

  return <div className={cn(styles.footer, className)}>{children}</div>;
};

export {Footer};
