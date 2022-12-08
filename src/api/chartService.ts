import {
    Chart,
    ChartType,
    CreateChartForm,
    UpdateChartForm
} from '../store/reducers/charts/types';
import { createMockChart } from '../utils/chartCreator';

function createChart(chartForm: CreateChartForm) {
    return new Promise<Chart>(resolve => resolve(createMockChart(chartForm)));
}

function readCharts() {
    return new Promise<Chart[]>(resolve =>
        setTimeout(() => {
            const charts = [
                createMockChart({
                    title: 'Profit',
                    type: ChartType.Line,
                    color: '#66fa7d'
                }),
                createMockChart({
                    title: 'Costs',
                    type: ChartType.Spline,
                    color: '#ff6b89'
                }),
                createMockChart({
                    title: 'Other',
                    type: ChartType.Area,
                    color: '#69a0ff'
                })
            ];
            charts.push(...Array.from(new Array(100)).map(createMockChart));
            resolve(charts);
        }, Math.random() * 1000)
    );
}

function updateChart(chartForm: UpdateChartForm) {
    return new Promise<UpdateChartForm>(resolve => resolve(chartForm));
}

function deleteChart(id: number) {
    return new Promise<number>(resolve => resolve(id));
}

export const ChartService = {
    createChart,
    readCharts,
    updateChart,
    deleteChart
};
