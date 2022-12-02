import { Box, Button, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import styles from './index.module.css';

export function RootBoundary() {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => console.error(error), []);
    const goHome = useCallback(() => navigate('/'), [navigate]);

    return (
        <Box className={styles.box}>
            <Typography>An error has occurred!</Typography>
            <Typography>See logs for more information.</Typography>
            <Button variant="contained" onClick={goHome}>
                Go home
            </Button>
        </Box>
    );
}
