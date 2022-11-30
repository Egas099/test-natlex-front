import { Box, CircularProgress } from '@mui/material';

export const LoadingBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
            }}
        >
            <CircularProgress />
        </Box>
    );
};
