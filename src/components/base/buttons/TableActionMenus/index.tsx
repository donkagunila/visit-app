import {icons} from "lucide-react";
import Menu, {MenuButton, MenuDivider, MenuItem, MenuItems} from "../../../Headless/Menu";
import Lucide from "../../Lucide";
import {Link} from "react-router-dom";

interface IViewButtonProps {
    viewUrl?: string,
    editUrl?: string,
    deleteUrl?: string,
    url?: string;
    type?: "view" | "edit" | "delete" | "custom",
    title?: string,
    icon?: keyof typeof icons,
    className?: string
}

const TableActionMenu = (props: IViewButtonProps) => {
    return (
        <div>
            <Menu>
                <MenuButton>
                    <div className="flex items-center gap-1 bg-slate-100 py-2 text-xs px-3 rounded-md">
                        <div>Actions</div>
                        <Lucide icon="ChevronDown" className="h-4 w-4"/>
                    </div>
                </MenuButton>
                <MenuItems className="p-1.5 w-[120px]">
                    {props.viewUrl && (
                        <MenuItem className="w-full p-0">
                            <Link
                                className="flex items-center gap-2 py-2 px-2 rounded-md data-[focus]:bg-blue-100 w-full"
                                to={props.viewUrl}>
                                <Lucide icon="Eye" className="h-3 w-3"/> View
                            </Link>
                        </MenuItem>
                    )}

                    {props.editUrl && (<MenuItem className="w-full p-0">
                            <Link
                                className="flex items-center gap-2 py-2 px-2 rounded-md data-[focus]:bg-blue-100 w-full"
                                to={props.editUrl}>
                                <Lucide icon="Pencil" className="h-3 w-3"/> Edit
                            </Link>
                        </MenuItem>
                    )}
                    {props.deleteUrl && (
                        <>
                            <MenuDivider></MenuDivider>
                            <MenuItem className="w-full p-0">
                                <a className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-red-500 hover:text-white transition duration-200 h-full data-[focus]:bg-blue-100 w-full"
                                   href="/license">
                                    <Lucide icon="Trash2" className="h-3 w-3"/>Delete
                                </a>
                            </MenuItem>
                        </>
                    )}

                </MenuItems>
            </Menu>
            {/*<Link to={props.url}>*/}
            {/*    <Button*/}
            {/*        className={twMerge([*/}
            {/*            "text-xs min-w-[60px] cursor-pointer shadow-none border-none py-1.5 px-3",*/}
            {/*            props.type == "view" && "bg-primary text-white",*/}
            {/*            props.type == "edit" && "bg-blue-500 text-white",*/}
            {/*            props.type == "delete" && "bg-red-500 text-white",*/}
            {/*            props.className])}>*/}
            {/*        {props.icon && (<Lucide icon={props.icon} className="w-3 h-3 mr-2"/>)}*/}
            {/*        {props.title}*/}
            {/*    </Button>*/}
            {/*</Link>*/}
        </div>
    );
};

export default TableActionMenu;
