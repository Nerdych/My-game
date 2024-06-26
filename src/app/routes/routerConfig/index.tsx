import {MainPage} from '@pages/MainPage';
import {PhotoEditorPage} from '@pages/PhotoEditorPage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {ErrorPage} from '@pages/ErrorPage';
import {paths} from '../paths';
import type {RouteObject} from 'react-router-dom';

const routerConfig: Array<RouteObject> = [
  {path: paths.main, element: <MainPage />, errorElement: <ErrorPage />},
  {path: paths.photoEditor, element: <PhotoEditorPage />},
];

const router = createBrowserRouter(routerConfig);

export function Router() {
  return <RouterProvider router={router} />;
}
