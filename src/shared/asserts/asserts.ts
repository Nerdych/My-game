import {guards} from '@shared/guards';

export const asserts = {
  defined: <T>(value: T | undefined) => {
    if (guards.not.defined(value)) {
      throw new Error('Given value is not defined');
    }
  },
};
