import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface DisplayModeState {
    mode: string;
}

const initialState: DisplayModeState = {
    mode: localStorage.getItem("displayMode") ?? "light",
};

export const displayModeSlice = createSlice({
    name: "displayMode",
    initialState,
    reducers: {
        setDisplayMode: (state, action: PayloadAction<string>) => {
            localStorage.setItem("displayMode", action.payload.toString());
            state.mode = action.payload;
        },
    },
});

export const { setDisplayMode } = displayModeSlice.actions;

export const selectDisplayMode = (state: RootState) => {
    if (localStorage.getItem("displayMode") === null) {
        localStorage.setItem("displayMode", "light");
    }

    return state.displayMode.mode;
};

export default displayModeSlice.reducer;
