import cn from 'classnames';
import {Text} from '@shared/ui-kit/Text';
import styles from '../styles/CheckboxButton.module.scss';
import type {FC} from 'react';
import type {CheckboxButtonProps} from '../types';

const CheckboxButton: FC<CheckboxButtonProps> = (props) => {
  const {text, variant = 'regular', ...inputProps} = props;

  return (
    <label className={cn(styles.root, styles[variant])}>
      <Text as="span">{text}</Text>
      <input className={styles.input} type="checkbox" {...inputProps} />
    </label>
  );
};

export {CheckboxButton};
