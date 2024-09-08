import {guards} from '../guards';

const objectToProperiesArray = (object: Record<string, unknown>): unknown[] => {
  return Object.values(object).reduce<Array<unknown>>((acc, value) => [...acc, value], []);
};

const isPropertyNamesEqual = (firstObject: Record<string, unknown>, secondObject: Record<string, unknown>) => {
  return Object.keys(firstObject).join('') === Object.keys(secondObject).join('');
};

const isArgsEqual = <PrevArgs extends Array<unknown>, CurrentArgs extends Array<unknown>>(
  prevArgs: PrevArgs,
  currentArgs: CurrentArgs,
) => {
  if (prevArgs.length !== currentArgs.length) {
    return false;
  }

  for (let argIndex = 0; argIndex < prevArgs.length; argIndex++) {
    const iterationPrevArg = prevArgs[argIndex];
    const iterationCurrentArg = currentArgs[argIndex];

    if (typeof iterationPrevArg !== typeof iterationCurrentArg) {
      return false;
    }

    if (guards.array(iterationPrevArg) && guards.array(iterationCurrentArg)) {
      if (isArgsEqual(iterationPrevArg, iterationCurrentArg)) {
        continue;
      }

      return false;
    }

    if (guards.object(iterationPrevArg) && guards.object(iterationCurrentArg)) {
      if (
        isPropertyNamesEqual(iterationPrevArg, iterationCurrentArg) &&
        isArgsEqual(objectToProperiesArray(iterationPrevArg), objectToProperiesArray(iterationCurrentArg))
      ) {
        continue;
      }

      return false;
    }

    if (iterationPrevArg === iterationCurrentArg) {
      continue;
    }

    return false;
  }

  return true;
};

const memoized = <Args, Result>(callback: (...args: Args[]) => Result) => {
  let alreadyCall = false;
  let prevValue: Result;
  let prevArgs: Args[] = [];

  return (...args: Args[]) => {
    if (!alreadyCall) {
      const newValue = callback(...args);

      alreadyCall = true;
      prevValue = newValue;
      prevArgs = JSON.parse(JSON.stringify([...args]));
      return newValue;
    }

    if (isArgsEqual(prevArgs, args)) {
      return prevValue;
    }

    const newValue = callback(...args);

    prevValue = newValue;
    prevArgs = JSON.parse(JSON.stringify([...args]));
    return newValue;
  };
};

export {memoized};
