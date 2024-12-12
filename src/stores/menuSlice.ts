import { createSlice } from "@reduxjs/toolkit";
import {Themes} from "./themeSlice.ts";
import {menu as sideMenu} from "../themes/shared/menus/side-menu.ts";
import { MenuBlock} from "../types/menu.types.ts";

export interface MenuState {
    menu: Array<MenuBlock>;
}


const initialState: MenuState = {
    menu: [],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
});


export const selectMenu = (layout: Themes["layout"]) => () => {
    if (layout == "side-menu") {
        return sideMenu;
    }

    return sideMenu;
};

export default menuSlice.reducer;
