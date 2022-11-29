import {
    Chart,
    ChartType,
    CreateChartForm,
    UpdateChartForm
} from '../store/redusers/charts/types';
import { createMockChart } from '../utils/chartCreator';

function createChart(chartForm: CreateChartForm) {
    return new Promise<Chart>(resolve => resolve(createMockChart(chartForm)));
}

function readCharts() {
    return new Promise<Chart[]>(resolve =>
        setTimeout(() => {
            resolve([
                createMockChart({
                    title: 'Profit',
                    type: ChartType.Line,
                    color: '#66fa7d'
                }),
                createMockChart({
                    title: 'Costs',
                    type: ChartType.Line,
                    color: '#ff6b89'
                }),
                createMockChart({
                    title: 'Other',
                    type: ChartType.Area,
                    color: '#69a0ff'
                })
            ]);
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
