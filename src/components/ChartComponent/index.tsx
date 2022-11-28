import { Grid } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { FC, useMemo } from 'react';
import { presetChartConfig } from './utils/constants';

interface Props {
    options: Highcharts.Options;
    range: { min: number; max: number };
}

const ChartComponent: FC<Props> = ({ options, range }) => {
    const preOptions = useMemo(() => {
        const newOptions = Object.assign({}, presetChartConfig);
        newOptions.xAxis.min = range.min;
        newOptions.xAxis.max = range.max;
        return newOptions;
    }, [range]);

    return (
        <Grid item xs={12} md={6}>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...preOptions,
                    ...options
                }}
            />
        </Grid>
    );
};

export default ChartComponent;
