import { Container } from '@mui/material';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Settings from '../pages/Settings';
import ViewMode from '../pages/ViewMode';

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <Container maxWidth="lg" sx={{ mt: '1rem' }}>
                    <Outlet />
                </Container>
            </>
        ),
        children: [
            {
                path: '/view_mode',
                element: <ViewMode />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '*',
                element: <Navigate to="/view_mode" replace />
            }
        ]
    }
]);
