import {icons} from "lucide-react";

export interface Menu {
    title?: string;
    icon: keyof typeof icons;
    badge?: number;
    path?: string;
    subMenu?: Menu[];
    ignore?: boolean;
    roles?: string[];
}

export interface MenuBlock {
    order: number,
    category: string,
    visibility: boolean,
    roles: string[];
    menuItems: Menu[]
}