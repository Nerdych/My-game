import type {ButtonProps} from '@shared/ui-kit/Button';
import type {TextFieldProps} from '@shared/ui-kit/TextField';
import type {ReactNode} from 'react';

type CustomProps = {
  buttonContent: ReactNode;
};

type TextFieldWithButtonProps = CustomProps & {
  buttonProps?: ButtonProps;
  textFieldProps?: TextFieldProps;
};

export type {TextFieldWithButtonProps};
