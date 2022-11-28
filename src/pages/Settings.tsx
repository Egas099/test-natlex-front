import { Box } from '@mui/material';
import ChartConfigList from '../components/ChartConfigList';

const Settings = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                margin: 'auto'
            }}
        >
            <ChartConfigList />
        </Box>
    );
};

export default Settings;
