import {forwardRef} from 'react';
import {getDisplayName} from '@shared/lib/hocs/getDisplayName';
import {TextFieldWithLabel} from './TextFieldWithLabel';
import {TextFieldWithoutLabel} from './TextFieldWithoutLabel';
import type {TextFieldProps} from '../types';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    type = 'text',
    variant = 'default',
    bold = false,
    spellCheck = false,
    ...otherProps
  } = props;
  const commonProps = {type, spellCheck, bold, variant};

  return label ? (
    <TextFieldWithLabel label={label} ref={ref} {...commonProps} {...otherProps} />
  ) : (
    <TextFieldWithoutLabel ref={ref} {...commonProps} {...otherProps} />
  );
});

TextField.displayName = getDisplayName('forwardRef', TextField);
