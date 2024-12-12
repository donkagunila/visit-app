import {Menu, MenuBlock} from "../../../types/menu.types.ts";
import {slideDown, slideUp} from "../../../utils/general.helpers.ts";

interface Location {
    pathname: string;
    forceActiveMenu?: string;
}

export interface FormattedMenu extends Menu {
    active?: boolean;
    activeDropdown?: boolean;
    subMenu?: FormattedMenu[];
}

// const isMatchingPath = (item: Menu, location: Location): boolean => {
//     const pathSegments = item.path?.split("/");
//     const locationSegments = location.pathname.split("/");
//
//     if (
//         (location.forceActiveMenu !== undefined &&
//             item.path === location.forceActiveMenu) ||
//         (location.forceActiveMenu === undefined &&
//             item.path === location.pathname)
//     ) {
//         return true;
//     }
//
//     return (
//         pathSegments?.[1] === locationSegments[1] &&
//         (pathSegments?.[2] === undefined || pathSegments[2] === locationSegments[2])
//     );
// };

const isMatchingPath = (item: Menu, location: Location): boolean => {

    if (item.path) {
        return ((location.forceActiveMenu !== undefined &&
                item.path === location.forceActiveMenu) ||
            (location.forceActiveMenu === undefined &&
                (location.pathname.startsWith(item.path) || item.path.startsWith(location.pathname))))
    }
    return false
};

const findActiveMenu = (subMenu: Menu[], location: Location): boolean => {
    for (const item of subMenu) {
        if (isMatchingPath(item, location) && !item.ignore) {
            return true;
        } else if (
            !item.ignore &&
            item.subMenu &&
            findActiveMenu(item.subMenu, location)
        ) {
            return true;  // Set to true instead of false to indicate parent is active
        }
    }
    return false;
};

// const nestedMenu = (menu: Array<Menu>, location: Location) => {
//
//     const formattedMenu: Array<FormattedMenu> = [];
//     menu.forEach((item) => {
//         const menuItem: FormattedMenu = {
//             icon: item.icon,
//             title: item.title,
//             path: item.path,
//             subMenu: item.subMenu,
//             ignore: item.ignore,
//             roles: item.roles,
//         };
//         menuItem.active =
//             ((location.forceActiveMenu !== undefined &&
//                     menuItem.path === location.forceActiveMenu) ||
//                 (location.forceActiveMenu === undefined &&
//                     menuItem.path === location.pathname) ||
//                 (menuItem.subMenu && findActiveMenu(menuItem.subMenu, location))) &&
//             !menuItem.ignore;
//         if (menuItem.subMenu) {
//             menuItem.activeDropdown = findActiveMenu(menuItem.subMenu, location);
//
//             // Nested menu
//             const subMenu: Array<FormattedMenu> = [];
//             nestedMenu(menuItem.subMenu, location).map(
//                 (menu) => subMenu.push(menu)
//             );
//             menuItem.subMenu = subMenu;
//         }
//         formattedMenu.push(menuItem);
//     });
//
//     return formattedMenu;
// };

const nestedMenu = (menu: Array<Menu>, location: Location) => {
    const formattedMenu: Array<FormattedMenu> = [];
    menu.forEach((item) => {
        const menuItem: FormattedMenu = {
            icon: item.icon,
            title: item.title,
            path: item.path,
            subMenu: item.subMenu,
            ignore: item.ignore,
            roles: item.roles,
        };

        menuItem.active =
            (isMatchingPath(item, location) || (menuItem.subMenu && findActiveMenu(menuItem.subMenu, location))) &&
            !menuItem.ignore;

        if (menuItem.subMenu) {
            menuItem.activeDropdown = findActiveMenu(menuItem.subMenu, location);

            // Nested menu
            const subMenu: Array<FormattedMenu> = nestedMenu(menuItem.subMenu, location);
            menuItem.subMenu = subMenu;
        }
        formattedMenu.push(menuItem);
    });

    return formattedMenu;
};

const enter = (el: HTMLElement) => {
    slideDown(el, 300);
};

const leave = (el: HTMLElement) => {
    slideUp(el, 300);
};

const menu: Array<MenuBlock> = [
    {
        category: "Business",
        order: 1,
        visibility: true,
        roles: ["OPERATION", "ADMINISTRATION"],
        menuItems: [

            {
                icon: "NotepadText",
                path: "/admin/applications",
                title: "Applications",
            },
            {
                icon: "Coins",
                path: "/admin/transactions",
                title: "Transactions",
            },
        ]
    },
    {
        order: 1,
        category: "Processes",
        visibility: false,
        roles: ['OPERATION', 'ADMINISTRATION'],
        menuItems: [
            {
                icon: "Bell",
                path: "/notifications",
                title: "Notifications",
            },
            {
                icon: "ClipboardList",
                path: "/tasks",
                title: "Tasks & Activities",
            },
        ] as Menu[]
    },
    {
        order: 2,
        category: "Reports",
        visibility: true,
        roles: ['ADMINISTRATION'],
        menuItems: [
            {
                icon: "BarChart3",
                path: "/admin/reports",
                title: "General Reports",
            }

        ] as Menu[]
    },
    {
        order: 2,
        category: "Administration",
        visibility: true,
        roles: ['ADMINISTRATION'],
        menuItems: [

            {
                icon: "Users",
                path: "/admin/users",
                title: "User Management",
            },
            {
                icon: "Activity",
                path: "/admin/audit-logs",
                title: "Audit Logs",
            },
            // {
            //     icon: "Settings",
            //     path: "/settings",
            //     title: "System Settings",
            // },
        ] as Menu[]
    }
]

export {nestedMenu, enter, leave, menu};