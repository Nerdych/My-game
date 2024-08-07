import cn from 'classnames';
import styles from '../styles/Text.module.scss';
import type {FC} from 'react';
import type {TextProps} from '../types';

const Text: FC<TextProps> = (props) => {
  const {children, className, weight = 'normal', as = 'div', size = 'm'} = props;
  const Tag = as;

  return <Tag className={cn(styles.root, styles[weight], styles[size], className)}>{children}</Tag>;
};

export {Text};
