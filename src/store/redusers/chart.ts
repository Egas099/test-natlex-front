import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    Chart,
    CreateChartForm,
    ChartId,
    UpdateChartForm,
    ChartType
} from './types';
import { createMockChart } from './utils';

const initialState: Chart[] = [
    createMockChart({
        title: 'Profit',
        type: ChartType.Line,
        color: '#66fa7d'
    }),
    createMockChart({ title: 'Costs', type: ChartType.Line, color: '#ff6b89' }),
    createMockChart({
        title: 'Other',
        type: ChartType.Area,
        color: '#69a0ff'
    })
];

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        createChart(state, action: PayloadAction<CreateChartForm>) {
            const newChartConfig = createMockChart(action.payload);
            return [...state, newChartConfig];
        },
        deleteChart(state, action: PayloadAction<ChartId>) {
            return state.filter(({ id }) => id !== action.payload);
        },
        updateChart(state, action: PayloadAction<UpdateChartForm>) {
            console.log(action.payload.id);
            const chart = state.find(chart => chart.id === action.payload.id);
            console.log(chart);
            if (chart) {
                chart.config = action.payload;
            }
        }
    }
});

export const { createChart, updateChart, deleteChart } = chartSlice.actions;
export const chartReduser = chartSlice.reducer;
