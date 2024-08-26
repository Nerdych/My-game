import {paths} from '@app/routes/paths';
import {ErrorPage} from '@pages/ErrorPage';
import {MainPage} from '@pages/MainPage';
import {PhotoEditorPage} from '@pages/PhotoEditorPage';
import type {RouteObject} from 'react-router-dom';

const routerConfig: Array<RouteObject> = [
  {path: paths.main, element: <MainPage />, errorElement: <ErrorPage />},
  {path: paths.photoEditor, element: <PhotoEditorPage />},
];

export {routerConfig};
