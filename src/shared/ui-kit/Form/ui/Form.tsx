import type {FC, FormEvent} from 'react';
import type {FormProps} from '../types';

const Form: FC<FormProps> = (props) => {
  const {onSubmit, children, ...otherProps} = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form {...otherProps} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export {Form};
