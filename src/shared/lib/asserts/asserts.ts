import {guards} from '@shared/lib/guards';

export const asserts = {
  defined: <T>(value: T | undefined | null) => {
    if (guards.not.defined(value)) {
      throw new Error('Given value is not defined');
    }
  },
};
