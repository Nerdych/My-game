import {Router} from '@app/routes';
import {ModalProvider} from '@shared/providers/modal';

import './styles/index.scss';
import './configs/i18n/config';

export const App = () => {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
};
