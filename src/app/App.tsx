import {Router} from '@app/routes';
import {ModalProvider} from '@shared/providers/modal';

import './styles/index.scss';
import './configs/i18n/config';
import {DependencyContainer} from '@shared/dependency';
import {HttpService} from '@shared/api';
import {useEffect} from 'react';
import {clientDependenciesConfig} from './configs/dependency/index';

export const App = () => {
  useEffect(() => {
    const fetch = async () => {
      const a = new DependencyContainer(clientDependenciesConfig).get(HttpService);
      console.log(await a.get());
    };

    fetch();
  }, []);

  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
};
