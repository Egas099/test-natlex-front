import { Box, CircularProgress, ListItem } from '@mui/material';

export const LoadingListItem = () => {
    return (
        <ListItem
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </ListItem>
    );
};
