import {InputWithLabel} from './InputWithLabel';
import {InputWithoutLabel} from './InputWithoutLabel';
import type {InputProps} from '../types';

export function Input(props: InputProps) {
  const {label, type = 'text', variant = 'default', bold = false, spellCheck = false, ...otherProps} = props;
  const commonProps = {type, spellCheck, bold, variant};

  return label ? (
    <InputWithLabel label={label} {...commonProps} {...otherProps} />
  ) : (
    <InputWithoutLabel {...commonProps} {...otherProps} />
  );
}
