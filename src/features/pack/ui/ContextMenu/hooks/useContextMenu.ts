import {useEffect, useRef} from 'react';
import {contextEmitter} from '../ui/WrapperContext';
import type {UseContextMenu} from '../types';

const useContextMenu: UseContextMenu = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contextEmitter.on('setContext', (params) => {
      if (!ref.current) {
        return;
      }

      const {right, top} = params;
      const rect = ref.current.getBoundingClientRect();

      const transformX = Math.max(0, right - rect.width);

      ref.current.style.transform = `translate(${transformX}px, ${top}px)`;
    });
  }, []);

  return {ref};
};

export {useContextMenu};
