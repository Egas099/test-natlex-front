import { RootState } from '..';

export const getChartsOptionsWithId = (state: RootState) => {
    return state.chart.map(({ id, config, dataSet }) => ({
        id,
        options: {
            title: {
                text: config.title
            },
            series: [
                {
                    color: config.color,
                    type: config.type || 'line',
                    data: dataSet.map(({ date, value }) => [date, value])
                }
            ]
        }
    }));
};

export const getChartsConfigWithId = (state: RootState) => {
    return state.chart.map(({ id, config }) => ({ id, ...config }));
};
