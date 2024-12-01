import cn from 'classnames';
import {forwardRef} from 'react';
import {getDisplayName} from '@shared/lib/hocs/getDisplayName';
import styles from '../styles/TextField.module.scss';
import type {TextFieldWithoutLabelRequiredProps} from '../types';

export const TextFieldWithoutLabel = forwardRef<
  HTMLInputElement,
  TextFieldWithoutLabelRequiredProps
>((props, ref) => {
  const {variant, bold, className, ...otherProps} = props;

  return (
    <input
      className={cn(styles.root, styles.input, styles[variant], bold && styles.bold, className)}
      ref={ref}
      {...otherProps}
    />
  );
});

TextFieldWithoutLabel.displayName = getDisplayName('forwardRef', TextFieldWithoutLabel);
