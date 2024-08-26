import {Router} from '@app/routes';
import {ReduxStoreProvider} from '@app/store';
import {ModalProvider} from '@shared/providers/modal';

import './styles/index.scss';
import './configs/i18n/config';

export const App = () => {
  return (
    <ReduxStoreProvider>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </ReduxStoreProvider>
  );
};
