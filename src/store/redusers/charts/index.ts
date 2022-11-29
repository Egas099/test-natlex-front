import { createSlice } from '@reduxjs/toolkit';
import { Chart } from './types';
import {
    createChartThunk,
    deleteChartThunk,
    fetchChartsThunk,
    updateChartThunk
} from './thunks';

const initialState: Chart[] = [];

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createChartThunk.fulfilled, (state, action) => {
            return [...state, action.payload];
        });
        builder.addCase(fetchChartsThunk.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(updateChartThunk.fulfilled, (state, action) => {
            const chart = state.find(chart => chart.id === action.payload.id);
            if (chart) {
                chart.config = action.payload;
            }
        });
        builder.addCase(deleteChartThunk.fulfilled, (state, action) => {
            return state.filter(({ id }) => id !== action.payload);
        });
    }
});

export const chartReduser = chartSlice.reducer;
