import {useState} from 'react';
import {useStableCallback} from './useStableCallback';
import type {ChangeEvent} from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useStableCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  });

  const resetValue = useStableCallback(() => {
    setValue('');
  });

  return {
    value,
    onChange,
    resetValue,
  };
};

export {useInput};
