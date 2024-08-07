import {useRef, useState, type FC} from 'react';
import {getAbsoluteCoordinates} from '@shared/lib/utils/getAbsoluteCoordinates';
import cn from 'classnames';
import styles from '../styles/WrapperContext.module.scss';
import type {WrapperContextProps} from '../types';

type EventHandler = (...args: any[]) => void;

class EventEmitter {
  private events: Record<string, EventHandler[]> = {};

  on(event: string, handler: EventHandler): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(handler);
  }

  off(event: string, handler: EventHandler): void {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter((h) => h !== handler);
  }

  emit(event: string, ...args: any[]): void {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((handler) => handler(...args));
  }

  once(event: string, handler: EventHandler): void {
    const onceHandler = (...args: any[]): void => {
      handler(...args);
      this.off(event, onceHandler);
    };
    this.on(event, onceHandler);
  }
}

const contextEmitter = new EventEmitter();
const padding = 50;

const WrapperContext: FC<WrapperContextProps> = (props) => {
  const {children} = props;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onClick = () => {
    if (!ref.current) {
      return;
    }

    const {right, top} = getAbsoluteCoordinates(ref.current);
    setActive(true);

    contextEmitter.emit('setContext', {
      top: Math.max(0, top - padding),
      right,
    });
  };

  return (
    <div className={cn(styles.root, active && styles.active)} ref={ref} aria-hidden onClick={onClick}>
      {children}
    </div>
  );
};

export {WrapperContext, contextEmitter};
