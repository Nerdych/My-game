import cn from 'classnames';
import styles from '../styles/Header.module.scss';
import type {FC} from 'react';
import type {HeaderProps} from '../types';

const Header: FC<HeaderProps> = (props) => {
  const {children, className} = props;

  return <div className={cn(styles.header, className)}>{children}</div>;
};

export {Header};
