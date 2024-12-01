import cn from 'classnames';
import {forwardRef} from 'react';
import {getDisplayName} from '@shared/lib/hocs/getDisplayName';
import styles from '../styles/TextField.module.scss';
import type {TextFieldWithLabelRequiredProps} from '../types';

export const TextFieldWithLabel = forwardRef<HTMLInputElement, TextFieldWithLabelRequiredProps>(
  (props, ref) => {
    const {label, className, variant, bold, ...otherProps} = props;

    return (
      <label className={cn(styles.root, styles.label)}>
        <input
          className={cn(styles.input, styles[variant], bold && styles.bold, className)}
          ref={ref}
          {...otherProps}
        />
        <span className={cn(styles.text, styles[variant])}>{label}</span>
      </label>
    );
  },
);

TextFieldWithLabel.displayName = getDisplayName('forwardRef', TextFieldWithLabel);
