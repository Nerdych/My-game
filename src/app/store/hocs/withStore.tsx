import {getDisplayName} from '@shared/lib/hocs/getDisplayName';
import {useLocalStorage} from '@shared/lib/hooks/useLocalStorage';
import {observer} from 'mobx-react';
import type {ComponentType, FC} from 'react';

const withStore = <Props extends {}>(Element: ComponentType<Props>) => {
  const WithStore: FC<Props> = (props) => {
    const {getValue} = useLocalStorage();
    const store = getValue('store');

    const ObservedElement = store === 'mobx' ? observer(Element) : Element;

    return <ObservedElement {...props} />;
  };

  WithStore.displayName = getDisplayName('WithStore', Element);

  return WithStore;
};

export {withStore};
