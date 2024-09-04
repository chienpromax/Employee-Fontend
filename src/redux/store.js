import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import initialState from './initialState';

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;