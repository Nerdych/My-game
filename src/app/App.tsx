import {Router} from '@app/routes';
import {ModalProvider} from '@shared/providers/modal';
import {clientDependenciesConfig} from '@app/configs';
import {StoreProvider} from '@app/store/provider/StoreProvider';
import {DependecyProvider} from '@shared/dependency';

import './styles/index.scss';
import './configs/i18n/config';

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
