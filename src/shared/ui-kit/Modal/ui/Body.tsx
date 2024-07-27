import cn from 'classnames';
import styles from '../styles/Body.module.scss';
import type {FC} from 'react';
import type {BodyProps} from '../types';

const Body: FC<BodyProps> = (props) => {
  const {children, className} = props;

  return <div className={cn(styles.body, className)}>{children}</div>;
};

export {Body};
