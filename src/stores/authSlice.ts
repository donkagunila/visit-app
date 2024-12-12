import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store.ts";


export type AuthDetails = {
    fullName: string,
    username: string,
    email: string,
    phone: string,
    role: string,
    token: string,
};

interface AuthDetailsState {
    value: AuthDetails | null;
}

const getAuthDetails = () => {
    try {
        const data = localStorage.getItem("FARMUSER");
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error("Error parsing FARMUSER data from localStorage:", error);
    }
    return null;
};

const initialState: AuthDetailsState = {
    value: getAuthDetails(),
};

export const authSlice = createSlice({
    name: "authDetails",
    initialState,
    reducers: {
        setAuthDetails: (state, action: PayloadAction<AuthDetails>) => {
            localStorage.setItem("FARMUSER", JSON.stringify(action.payload));
            state.value = action.payload;
        },

        removeAuthDetails: (state) => {
            localStorage.removeItem("FARMUSER");
            state.value = null; // Set state to null after removal
        },


    },
});


export const getUserAuthDetails = (state: RootState) => {
    return state.auth.value;
};


export const {setAuthDetails, removeAuthDetails} = authSlice.actions;

export default authSlice.reducer;
