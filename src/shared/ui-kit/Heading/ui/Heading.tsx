import cn from 'classnames';
import styles from '../styles/Heading.module.scss';
import type {HeadingProps} from '../types';

export const Heading = (props: HeadingProps) => {
  const {children, className, weight = 'normal', as = 'h1'} = props;
  const Tag = as;

  return <Tag className={cn(styles.root, styles[as], styles[weight], className)}>{children}</Tag>;
};
