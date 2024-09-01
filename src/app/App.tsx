import {Router} from '@app/routes';
import {ReduxStoreProvider} from '@app/store';
import {ModalProvider} from '@shared/providers/modal';
import {clientDependenciesConfig} from '@app/configs';
import {DependecyConfigProvider} from '@shared/dependency';

import './styles/index.scss';
import './configs/i18n/config';

export const App = () => {
  return (
    <DependecyConfigProvider dependencyConfig={clientDependenciesConfig}>
      <ReduxStoreProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </ReduxStoreProvider>
    </DependecyConfigProvider>
  );
};
