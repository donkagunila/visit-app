import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import ClaritySideMenu from "../themes/Clarity/SideMenu";
import SerenitySideMenu from "../themes/Serenity/Sidemenu";
import VibrantSideMenu from "../themes/Vibrant/Sidemenu";


export const themes = [
    {
        name: "clarity",
        layout: "side-menu",
        component: ClaritySideMenu,
    },
    {
        name: "vibrant",
        layout: "side-menu",
        component: VibrantSideMenu,
    },
    {
        name: "serenity",
        layout: "side-menu",
        component: SerenitySideMenu,
    },
] as const;

export type Themes = (typeof themes)[number];

interface ThemeState {
    value: {
        name: Themes["name"];
        layout: Themes["layout"];
    };
}


export const getTheme = (search?: {
    name: Themes["name"];
    layout: Themes["layout"];
}) => {
    const searchValues =
        search === undefined
            ? {
                name: localStorage.getItem("theme"),
                layout: localStorage.getItem("layout"),
            }
            : search;

    return themes.filter((item) => {
        return (
            item.name === searchValues.name && item.layout === searchValues.layout
        );
    })[0];
}

const initialState: ThemeState = {
    value: {
        name: "vibrant",
        layout:
            localStorage.getItem("layout") === null
                ? themes[0].layout
                : getTheme().layout,
    },
};


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Themes["name"]>) => {
            state.value = {
                name: action.payload,
                layout: state.value.layout,
            };

            localStorage.setItem("theme", action.payload);
        },
        setLayout: (state, action: PayloadAction<Themes["layout"]>) => {
            state.value = {
                name: state.value.name,
                layout: action.payload,
            };

            localStorage.setItem("layout", action.payload);
        },
    },
});


export const { setTheme, setLayout } = themeSlice.actions;

export const selectTheme = (state: RootState) => {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "clarity");
    }

    if (localStorage.getItem("layout") === null) {
        localStorage.setItem("layout", "side-menu");
    }

    return state.theme.value;
};

export default themeSlice.reducer;
