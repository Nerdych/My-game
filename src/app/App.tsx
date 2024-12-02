import {Router} from '@app/routes';
import {ModalProvider} from '@shared/providers/modal';
import {clientDependenciesConfig} from '@app/configs/dependency/config';
import {StoreProvider} from '@app/store/provider/StoreProvider';
import {DependecyProvider} from '@shared/dependency';

import '@app/configs/i18n/config';
import '@app/styles/index.scss';

export const App = () => {
  return (
    <DependecyProvider dependencyConfig={clientDependenciesConfig}>
      <StoreProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </StoreProvider>
    </DependecyProvider>
  );
};
