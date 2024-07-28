import type {ComponentType} from 'react';

const getDisplayName = <Props>(hocName: string, Component: ComponentType<Props>) => {
  const componentName = Component.displayName || Component.name || 'Component';
  return `${hocName}(${componentName})`;
};

export {getDisplayName};
