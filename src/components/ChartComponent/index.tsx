import { Grid } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { FC, useMemo } from 'react';
import { PRESET_CHART_CONFIG } from './utils/constants';

interface Props {
    options: Highcharts.Options;
    range: { from: number; to: number };
}

const ChartComponent: FC<Props> = ({ options, range }) => {
    const presetOptions = useMemo(() => {
        const newOptions = Object.assign({}, PRESET_CHART_CONFIG);
        newOptions.xAxis.min = range.from;
        newOptions.xAxis.max = range.to;
        return newOptions;
    }, [range]);

    return (
        <Grid item xs={12} md={6}>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    ...presetOptions,
                    ...options
                }}
            />
        </Grid>
    );
};

export default ChartComponent;
