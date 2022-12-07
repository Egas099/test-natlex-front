import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootBoundary } from '../components/RootBoundary';
import PageLayout from '../components/PageLayout';
import Settings from '../pages/Settings';
import ViewMode from '../pages/ViewMode';

const BASENAME = '/test-natlex-front';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <PageLayout />,
            children: [
                {
                    path: 'view_mode',
                    element: <ViewMode />
                },
                {
                    path: 'settings',
                    element: <Settings />
                },
                {
                    path: '/',
                    element: <Navigate to="view_mode" replace />
                }
            ],
            errorElement: <RootBoundary />
        }
    ],
    {
        basename: BASENAME
    }
);
