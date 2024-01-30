import { configureStore } from '@reduxjs/toolkit';
import dataValueReducer from './dataValueSlice';

export const store = configureStore({
    reducer: {
        dataValue: dataValueReducer,
    },
});