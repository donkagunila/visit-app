import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import ActionTopBar from "../../shared/ActionTopBar";
import {icons} from "lucide-react";
import {useEffect, useMemo, useState} from "react";
import {twMerge} from "tailwind-merge";
import Lucide from "../../../components/base/Lucide";

type MenuItem = {
    title: string,
    path: string
}

type SideMenuItem = {
    title: string;
    icon: keyof typeof icons,
    subMenus: MenuItem[]
}


const menus: SideMenuItem[] = [
    {
        title: "Dashboard",
        icon: "LayoutDashboard",
        subMenus: [
            {
                title: "Default",
                path: "/"
            },
            {
                title: "Statistics",
                path: "/dashboards/statistics"
            }
        ]
    },
    {
        title: "Pages",
        icon: "Files",
        subMenus: [
            {
                title: "Account",
                path: "/pages/account"
            },
            {
                title: "Team",
                path: "/pages/teams"
            }
        ]
    },
    {
        title: "Apps",
        icon: "Layers",
        subMenus: [
            {
                title: "projects",
                path: "/apps/projects"
            },
            {
                title: "File Manager",
                path: "/apps/file-manager"
            },
            {
                title: "Inbox",
                path: "/apps/inbox"
            },
            {
                title: "Contacts",
                path: "/apps/contacts"
            },

            {
                title: "workflow builder",
                path: "/apps/workflow"
            },
            {
                title: "Kanban",
                path: "/apps/kanban"
            }
        ]
    },
    {
        title: "Utilities",
        icon: "GitCompare",
        subMenus: [
            {
                title: "Modals",
                path: "/utilities/modals"
            },
            {
                title: "Search",
                path: "/utilities/search"
            },
            {
                title: "charts",
                path: "/utilities/charts"
            }
        ]
    }
];

const SerenitySideMenu = () => {

    const location = useLocation();
    const menuItems = useMemo(() => menus, []);
    const [selectedMenu, setSelectedMenu] = useState<string | undefined>();
    const [activeMenu, setActiveMenu] = useState<SideMenuItem>();


    useEffect(() => {
        if (menuItems) {

            const selectedItem = menuItems.find(
                (menu) => menu.subMenus?.some((subMenu) => subMenu.path === location.pathname)
            );
            setActiveMenu(selectedItem);
            setSelectedMenu(selectedItem?.title);
        }

        return () => {
            setActiveMenu(undefined);
        }
    }, [menuItems, location, selectedMenu]);
    return <div>
        <div className="flex overflow-hidden">
            {/* Start:: Side Menu */}
            <div className="fixed top-0 w-[85px] xl:w-[360px] overflow-x-hidden z-50 h-screen flex bg-primary">
                <div
                    className="w-[75px] h-full border-r border-white/10 py-16 flex justify-between items-center flex-col">
                    <div>
                        <ul className={"flex gap-2 w-full flex-col justify-center items-center"}>
                            {menus.map((item: SideMenuItem, index: number) => (
                                <SideMenuItem key={index} item={item} selectedMenu={selectedMenu ?? ""}
                                              onSelect={setSelectedMenu}/>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="flex-1">
                    {activeMenu && (
                        <div className={"px-5 py-4"}>
                            <div className="text-white text-lg pt-4 px-2 capitalize">
                                {activeMenu.title}
                            </div>

                            <ul className="py-2 flex flex-col gap-2 overflow-x-hidden">
                                {activeMenu.subMenus && (
                                    <SubMenuItem subMenus={activeMenu.subMenus}/>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Start:: Main Content*/}

            <div
                className="relative ml-[85px] xl:ml-[360px]  flex-1 flex flex-col max-w-full md:max-w-none  min-w-0 min-h-screen bg-slate-100 border-t-4 border-primary">
                <ActionTopBar/>
                <Outlet/>
            </div>
        </div>
    </div>
}


interface SideMenuItemProps {
    item: SideMenuItem;
    selectedMenu: string;
    onSelect: (menuTitle: string) => void;
}

const SideMenuItem = ({item, selectedMenu, onSelect}: SideMenuItemProps) => {

    const navigate = useNavigate();

    return <li
        className={twMerge([
            "p-4 rounded-md cursor-pointer text-white border border-transparent",
            "transition-all ease-in",
            "hover:bg-white/10 hover:border-white/10",
            item.title == selectedMenu && 'bg-white/10 border border-white/10'
        ])}
        onClick={() => {
            onSelect(item.title)
            if (item.subMenus?.length) {
                navigate(item.subMenus[0].path); // Navigate to first submenu path
            }
        }}
    >
        <Lucide icon={item.icon}/>
    </li>
}


interface subMenuitemProps {
    subMenus: MenuItem[]
}

const SubMenuItem = ({subMenus}: subMenuitemProps) => {
    return (
        <>
            {subMenus.map((item: MenuItem) => (
                <li key={item.title}>
                    <NavLink to={item.path} className={({isActive}) => twMerge(["sub-menu-item",
                        isActive && "active"])}>
                    <span className="block border border-transparent p-0.5 rounded-full sum-menu-dot">
                        <span className="w-1 h-1 bg-white block rounded-full"></span>
                    </span>
                        <div className={"flex-1 capitalize"}>{item.title}</div>
                    </NavLink>
                </li>
            ))}
        </>)
}

export default SerenitySideMenu