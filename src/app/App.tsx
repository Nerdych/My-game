import {Router} from '@app/routes';
import {ModalProvider} from '@shared/providers/modal';

import './styles/index.scss';
import './configs/i18n/config';

export function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}
