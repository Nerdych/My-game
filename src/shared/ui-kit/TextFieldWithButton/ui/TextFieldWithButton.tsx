import {Button} from '@shared/ui-kit/Button';
import {TextField} from '@shared/ui-kit/TextField';
import cn from 'classnames';
import {Form} from '@shared/ui-kit/Form';
import styles from '../styles/TextFieldWithButton.module.scss';
import type {TextFieldWithButtonProps} from '../types';
import type {FC} from 'react';

const TextFieldWithButton: FC<TextFieldWithButtonProps> = (props) => {
  const {buttonContent, buttonProps, textFieldProps} = props;

  return (
    <Form className={styles.root}>
      <TextField {...textFieldProps} className={cn(styles.input, textFieldProps?.className)} variant="default" />
      <Button
        {...buttonProps}
        type="submit"
        className={cn(styles.button, buttonProps?.className)}
        size="large"
        variant="accent"
      >
        {buttonContent}
      </Button>
    </Form>
  );
};

export {TextFieldWithButton};
