import { Container } from '@mui/material';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { RootBoundary } from '../components/RootBoundary';
import Settings from '../pages/Settings';
import ViewMode from '../pages/ViewMode';

const BASENAME = '/test-natlex-front';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <>
                    <Header />
                    <Container maxWidth="lg" sx={{ mt: '1rem', mb: '1rem' }}>
                        <Outlet />
                    </Container>
                </>
            ),
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
