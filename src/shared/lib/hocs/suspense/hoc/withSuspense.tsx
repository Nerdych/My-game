import {Suspense} from 'react';
import {getDisplayName} from '@shared/lib/hocs/getDisplayName';
import type {ComponentType, FC} from 'react';

const withSuspense = <Props extends {}>(Element: ComponentType<Props>) => {
  const WithSuspense: FC<Props> = (props) => {
    return (
      <Suspense>
        <Element {...props} />
      </Suspense>
    );
  };

  WithSuspense.displayName = getDisplayName('WithSuspense', Element);

  return WithSuspense;
};

export {withSuspense};
