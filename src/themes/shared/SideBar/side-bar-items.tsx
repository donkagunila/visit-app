import {Menu} from "../../../types/menu.types.ts";
import {useEffect, useState} from "react";
import {FormattedMenu, nestedMenu} from "../menus/side-menu.ts";
import SideBarItem from "./side-bar-item.tsx";
import {useLocation} from "react-router-dom";

interface Props {
    className?: string;
    menu: Menu[];

}
const SideBarItems = (props: Props) =>  {

    const [formattedMenu, setFormattedMenu] = useState<
        Array<FormattedMenu>
    >([]);

    const location = useLocation();

    useEffect(() => {
        const sideMenu = () => nestedMenu(props.menu, location);
        setFormattedMenu(sideMenu());
    }, [props.menu, location]);



    return <div className={"overflow-x-hidden"}>
        <ul className="mb-3 flex flex-col gap-1.5 w-full">
            {formattedMenu.map((_menu, index: number) => (
               <SideBarItem key={index} menu={_menu} setFormattedMenu={setFormattedMenu} />
            ))}
        </ul>
    </div>
}

export default SideBarItems