import {useCallback, useLayoutEffect, useRef} from 'react';

type Handler<Args extends Array<unknown>, Result> = (...args: Args) => Result;

export const useStableCallback = <Args extends Array<unknown>, Result>(handler: Handler<Args, Result>) => {
  const handlerRef = useRef<Handler<Args, Result>>();

  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: Args) => {
    const fn = handlerRef.current;
    return fn?.(...args) as Result;
  }, []);
};
