import { createSlice } from '@reduxjs/toolkit';
import { Chart, ChartStatus } from './types';
import {
    createChartThunk,
    deleteChartThunk,
    fetchChartsThunk,
    updateChartThunk
} from './thunks';

interface ChartState {
    entities: Chart[];
    loading: ChartStatus;
}

const initialState: ChartState = {
    entities: [],
    loading: ChartStatus.idle
};

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createChartThunk.fulfilled, (state, action) => {
            state.entities.push(action.payload);
        });
        builder.addCase(fetchChartsThunk.pending, (state, action) => {
            state.loading = ChartStatus.pending;
        });
        builder.addCase(fetchChartsThunk.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = ChartStatus.succeeded;
        });
        builder.addCase(fetchChartsThunk.rejected, (state, action) => {
            state.loading = ChartStatus.failed;
        });
        builder.addCase(updateChartThunk.fulfilled, (state, action) => {
            const chart = state.entities.find(
                ({ id }) => id === action.payload.id
            );
            if (chart) {
                chart.config = action.payload;
            }
        });
        builder.addCase(deleteChartThunk.fulfilled, (state, action) => {
            state.entities = state.entities.filter(
                ({ id }) => id !== action.payload
            );
        });
    }
});

export const chartReduser = chartSlice.reducer;
