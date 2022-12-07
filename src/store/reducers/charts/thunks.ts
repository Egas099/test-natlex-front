import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChartService } from '../../../api/chartService';
import { CreateChartForm, UpdateChartForm } from './types';

export const createChartThunk = createAsyncThunk(
    'charts/create',
    async (chartForm: CreateChartForm) => {
        return await ChartService.createChart(chartForm);
    }
);
export const fetchChartsThunk = createAsyncThunk(
    'charts/fetchAll',
    async () => {
        return await ChartService.readCharts();
    }
);
export const updateChartThunk = createAsyncThunk(
    'charts/update',
    async (chartForm: UpdateChartForm) => {
        return await ChartService.updateChart(chartForm);
    }
);
export const deleteChartThunk = createAsyncThunk(
    'charts/delete',
    async (id: number) => {
        return await ChartService.deleteChart(id);
    }
);
