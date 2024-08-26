import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {routerConfig} from '@app/configs';

const router = createBrowserRouter(routerConfig);

export const Router = () => {
  return <RouterProvider router={router} />;
};
