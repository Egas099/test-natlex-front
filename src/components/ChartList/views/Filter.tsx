import { Box } from '@mui/material';
import { FC } from 'react';
import DateRangePicker from '../../DateRangePicker';

type Props = {
    defaultRange: {
        from: number;
        to: number;
    };
    onChange: (from: number, to: number) => void;
};

const Filter: FC<Props> = ({ defaultRange: { from, to }, onChange }) => {
    return (
        <Box
            sx={{
                background: 'white',
                p: '10px',
                mb: '1rem'
            }}
        >
            <DateRangePicker
                defaultFrom={from}
                defaultTo={to}
                onChange={onChange}
            />
        </Box>
    );
};

export default Filter;
