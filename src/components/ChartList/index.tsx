import { Box, Divider, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getChartsOptionsWithId } from '../../store/redusers/selectors';
import ChartComponent from '../ChartComponent';
import DateRangePicker from '../DateRangePicker';

const DEFAULT_RANGE = {
    min: 0,
    max: Date.UTC(2020, 0, 0)
};

const ChartList = () => {
    const charts = useTypedSelector(getChartsOptionsWithId);
    const [dateRange, setDateRange] = useState(DEFAULT_RANGE);

    const handleFilterChanging = useCallback(
        (min: number, max: number) => setDateRange({ min, max }),
        []
    );

    return (
        <>
            {charts.length ? (
                <>
                    <Box
                        sx={{
                            background: 'white',
                            p: '10px',
                            marginBottom: '20px'
                        }}
                    >
                        <DateRangePicker
                            defaultFrom={DEFAULT_RANGE.min}
                            defaultTo={DEFAULT_RANGE.max}
                            onChange={handleFilterChanging}
                        />
                    </Box>
                    <Grid container spacing={3}>
                        {charts.map(chart => (
                            <ChartComponent
                                key={chart.id}
                                options={chart.options}
                                range={dateRange}
                            />
                        ))}
                    </Grid>
                </>
            ) : (
                <>Chart list empty</>
            )}
        </>
    );
};

export default ChartList;
