import {
    Chart,
    ChartType,
    CreateChartForm,
    Point
} from '../store/reducers/charts/types';

const ONE_DAY_MS = 1000 * 3600 * 24;

let count = 0;

const defaultConfig = () => ({
    title: `New chart ${count++}`,
    color: '#1976D2',
    type: ChartType.Line
});

function createDataSet(pointCount: number) {
    const newDataSet: Point[] = [];
    for (let i = 0; i < pointCount; i++) {
        newDataSet[i] = {
            date: i * ONE_DAY_MS * 31,
            value:
                (newDataSet.at(i - 1)?.value ||
                    Math.floor(Math.random() + 100)) +
                (Math.floor(Math.random() * 2) ? 1 : -1)
        };
    }
    return newDataSet;
}

export const createMockChart = (form?: CreateChartForm): Chart => ({
    id: Math.round(Date.now() * Math.random()),
    config: form || defaultConfig(),
    dataSet: createDataSet(600)
});
