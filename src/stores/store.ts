import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import displayModeReducer from './displayModeSlice.ts';
import colorSchemeReducer from './colorSchemeSlice';
import menuReducer from './menuSlice'
import authReducer from './authSlice'
import themeReducer from './themeSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        displayMode: displayModeReducer,
        colorScheme: colorSchemeReducer,
        menus: menuReducer,
        auth: authReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;