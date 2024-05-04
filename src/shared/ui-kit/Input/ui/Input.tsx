import {InputWithLabel} from './InputWithLabel';
import {InputWithoutLabel} from './InputWithoutLabel';
import type {InputComponentProps} from '../types';

export function Input(props: InputComponentProps) {
  const {label} = props;
  return label ? <InputWithLabel label={label} {...props} /> : <InputWithoutLabel {...props} />;
}
