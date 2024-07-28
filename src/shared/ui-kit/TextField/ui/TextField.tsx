import {TextFieldWithLabel} from './TextFieldWithLabel';
import {TextFieldWithoutLabel} from './TextFieldWithoutLabel';
import type {TextFieldProps} from '../types';

export const TextField = (props: TextFieldProps) => {
  const {label, type = 'text', variant = 'default', bold = false, spellCheck = false, ...otherProps} = props;
  const commonProps = {type, spellCheck, bold, variant};

  return label ? (
    <TextFieldWithLabel label={label} {...commonProps} {...otherProps} />
  ) : (
    <TextFieldWithoutLabel {...commonProps} {...otherProps} />
  );
};
