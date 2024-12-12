import {ColorSchemes} from "../stores/colorSchemeSlice.ts";


export const getGradient = (ctx: any, chartArea: any) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(0, 158, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0, 158, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 158, 255, 1)');
    return gradient;
}


export const getColorSchemeHex = (colorScheme: ColorSchemes) : string =>  {
    switch (colorScheme){
        case "theme-1":
            return "#047857"
        case "theme-2":
            return "#7c3aed"
        case "theme-3":
            return "#f59f0a"
        case "theme-4":
            return "#334255"
        case "theme-5":
            return "#ef4545"
        default:
            return "#047857"
    }
}