// redux/dataValueSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dataValueSlice = createSlice({
    name: 'dataValue',
    initialState: 0,
    reducers: {
        setDataValue: (state, action) => {
        return action.payload;
        }
    }
});

export const { setDataValue } = dataValueSlice.actions;

export default dataValueSlice.reducer;