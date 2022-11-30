import { Box, Typography } from '@mui/material';

export const EmptyBox = () => {
    return (
        <Box
            sx={{
                textAlign: 'center'
            }}
        >
            <Typography variant="h6">Chart list empty</Typography>
        </Box>
    );
};
