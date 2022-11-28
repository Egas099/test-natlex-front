import { configureStore } from '@reduxjs/toolkit';
import { chartReduser } from './redusers/chart';

export const store = configureStore({
    reducer: {
        chart: chartReduser
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
