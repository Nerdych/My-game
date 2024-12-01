import {useState} from 'react';
import type {ChangeEvent} from 'react';

type AvailableChangeEvents = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

type FileValue = {
  path: string;
  previewUrl: string;
  blob: File;
};

type FormState<Schema extends {}> = {
  [Key in keyof Schema]: NonNullable<Schema[Key]> extends FileValue ? string : Schema[Key];
};

type OnChangeFieldType = {
  (event: ChangeEvent<HTMLInputElement>): void;
  (event: ChangeEvent<HTMLSelectElement>): void;
};

type RegisterResult<Schema extends {}, Key extends keyof Schema> = {
  onChange: OnChangeFieldType;
  value: FormState<Schema>[Key];
};

const getInitialState = <Schema extends {}>(schema: Schema): FormState<Schema> => {
  const schemaKeys = Object.keys(schema) as (keyof Schema)[];
  return schemaKeys.reduce((acc, key) => ({...acc, [key]: schema[key]}), {} as FormState<Schema>);
};

const isFileInput = (event: AvailableChangeEvents): event is ChangeEvent<HTMLInputElement> => {
  return event.target.type === 'file';
};

const isTextInput = (event: AvailableChangeEvents): event is ChangeEvent<HTMLInputElement> => {
  return event.target.type === 'text';
};

const isSelect = (event: AvailableChangeEvents): event is ChangeEvent<HTMLSelectElement> => {
  return event.target.type === 'select-one';
};

const useForm = <Schema extends {}>(schema: Schema) => {
  const [formState, setFormState] = useState<FormState<Schema>>(() => getInitialState(schema));
  const [formValues, setFormValues] = useState<Schema>(schema);

  const onChangeFileField = (event: ChangeEvent<HTMLInputElement>, name: keyof Schema) => {
    const {files, value} = event.target;
    const blob = files && files[0];
    const previewUrl = blob && URL.createObjectURL(blob);

    setFormState((prev) => ({...prev, [name]: value}));
    setFormValues((prev) => ({...prev, [name]: {path: value, blob, previewUrl}}));
  };

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>, name: keyof Schema) => {
    const {value} = event.target;

    setFormState((prev) => ({...prev, [name]: value}));
    setFormValues((prev) => ({...prev, [name]: value}));
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>, name: keyof Schema) => {
    const {value} = event.target;

    setFormState((prev) => ({...prev, [name]: value}));
    setFormValues((prev) => ({...prev, [name]: value}));
  };

  const onChangeField =
    (name: keyof Schema): OnChangeFieldType =>
    (event: AvailableChangeEvents) => {
      if (isFileInput(event)) {
        onChangeFileField(event, name);
        return;
      }

      if (isSelect(event)) {
        onChangeSelect(event, name);
        return;
      }

      if (isTextInput(event)) {
        onChangeTextField(event, name);
      }
    };

  const register = <Key extends keyof Schema>(name: Key): RegisterResult<Schema, Key> => {
    return {
      onChange: onChangeField(name),
      value: formState[name],
    };
  };

  return {register, formValues};
};

export {useForm};
export type {FileValue};
