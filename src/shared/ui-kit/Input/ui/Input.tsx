import {InputWithLabel} from './InputWithLabel';
import {InputWithoutLabel} from './InputWithoutLabel';
import type {InputComponentProps} from '../types';

export function Input(props: InputComponentProps) {
  const {label, type = 'text', spellCheck = false} = props;

  return label ? (
    <InputWithLabel label={label} type={type} spellCheck={spellCheck} {...props} />
  ) : (
    <InputWithoutLabel type={type} spellCheck={spellCheck} {...props} />
  );
}
