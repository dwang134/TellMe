import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from './reducer'
import {expenseApi} from './expenseApi'
import {createWrapper} from 'next-redux-wrapper'

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
        [expenseApi.reducerPath]: expenseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expenseApi.middleware),
});
