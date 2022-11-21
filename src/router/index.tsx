import { createBrowserRouter, Navigate } from 'react-router-dom';
import Settings from '../pages/Settings';
import ViewMode from '../pages/ViewMode';

export const routes = createBrowserRouter([
    {
        path: '/view_mode',
        element: <ViewMode/>
    },
    {
        path: '/settings',
        element: <Settings/>
    },
    {
        path: '*',
        element: <Navigate to="/view_mode" replace />
    }
]);
