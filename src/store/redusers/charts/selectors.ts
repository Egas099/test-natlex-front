import { RootState } from '../..';

export const getChartsOptionsWithId = (state: RootState) => {
    return {
        loading: state.chart.loading,
        charts: state.chart.entities.map(({ id, config, dataSet }) => ({
            id,
            options: {
                title: {
                    text: config.title
                },
                series: [
                    {
                        color: config.color,
                        type: config.type,
                        data: dataSet.map(({ date, value }) => [date, value])
                    }
                ]
            }
        }))
    };
};

export const getChartsConfigWithId = (state: RootState) => {
    return state.chart.entities.map(({ id, config }) => ({ id, ...config }));
};
