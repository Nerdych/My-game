import {useEffect} from 'react';
import {useAction} from '@app/store/hooks/useAction';
import type {FormValues} from '../types';

const useUpdateGlobalState = (formValues: FormValues) => {
  const {runAction} = useAction();

  useEffect(() => {
    const prepareFormValues = {...formValues, file: formValues.file?.blob};
    runAction('pack', 'editInfo', prepareFormValues);
  }, [formValues, runAction]);
};

export {useUpdateGlobalState};
