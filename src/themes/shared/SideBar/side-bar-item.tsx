import {Transition} from "react-transition-group";
import {enter, FormattedMenu, leave} from "../menus/side-menu.ts";
import clsx from "clsx";
import React from "react";
import Lucide from "../../../components/base/Lucide";
import {useNavigate} from "react-router-dom";
import {twMerge} from "tailwind-merge";


interface Props {
    className?: string;
    menu: FormattedMenu;
    setFormattedMenu: React.Dispatch<React.SetStateAction<Array<FormattedMenu>>>;
}

const SideBarItem = (props: Props) => {


    return (
        <li>

            <Item
                menu={props.menu}
                level={"first"}
                setFormattedMenu={props.setFormattedMenu}>

            </Item>

            {/* BEGIN: Second Child */}
            {props.menu.subMenu && (
                <Transition
                    in={props.menu.activeDropdown}
                    onEnter={enter}
                    onExit={leave}
                    timeout={300}
                >
                    <ul
                        className={clsx([
                            "bg-white/20 mt-1 rounded-xl relative dark:bg-transparent",
                            "before:content-[''] before:block before:inset-0 before:bg-white/30 before:rounded-xl before:absolute before:z-[-1] before:dark:bg-darkmode-900/30",
                            {block: props.menu.activeDropdown},
                            {hidden: !props.menu.activeDropdown}
                        ])}
                    >
                        {props.menu.subMenu.map((subMenu, subMenuKey) => (
                            <li key={subMenuKey}>
                                <Item
                                    className={clsx(['hover:bg-white/[0.1]']
                                    )}
                                    menu={subMenu}
                                    level="second"
                                ></Item>
                            </li>
                        ))}
                    </ul>
                </Transition>
            )}
        </li>
    );
}

function Item(props: {
    className?: string;
    menu: FormattedMenu;
    level: "first" | "second" | "third";
    setFormattedMenu?: (value: React.SetStateAction<FormattedMenu[]>) => void;
}) {
    const navigate = useNavigate();
    const navTo = (menu: FormattedMenu) => {
        if (menu.subMenu) {
            menu.activeDropdown = !menu.activeDropdown;
        } else {
            if (menu.path !== undefined) {
                navigate(menu.path);
            }
        }
    };

    return <div className={twMerge([
        "cursor-pointer flex justify-center items-center md:gap-2 xl:px-3 py-2.5 rounded-md text-white dark:text-slate-400 transition-all border border-transparent",
        clsx({
            "bg-white/10 border border-white/30 dark:bg-white/10 cursor-pointer":
                props.menu.active && props.level === "first",
            "hover:bg-white/15 hover:border hover:border-white/10 hover:dark:bg-transparent hover:before:content-[''] hover:before:block hover:before:inset-0 hover:before:rounded-xl hover:before:absolute hover:before:z-[-1] hover:before:border-b-[3px] hover:before:border-solid hover:before:border-black/[0.08] hover:before:dark:bg-darkmode-700":
                !props.menu.active &&
                !props.menu.activeDropdown &&
                props.level === "first"
        }),
        props.className
    ])}
                onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    navTo(props.menu);
                    if (props.setFormattedMenu) {
                        // Update your state here
                        props.setFormattedMenu(prevFormattedMenu => {
                            return prevFormattedMenu.map(item => item.title === props.menu.title ? props.menu : item);
                        });
                    }
                    // props.setFormattedMenu && props.setFormattedMenu(prevFormattedMenu => [...prevFormattedMenu, props.menu])
                }}>
        <Lucide icon={props.menu.icon} className={"h-4 w-4 xl:mr-2 "}/>
        <span className="text-sm flex-1 hidden xl:block">{props.menu.title}</span>
        {props.menu.subMenu && (<Lucide icon="ChevronDown" className={clsx("h-4 w-5 hidden xl:block",
            {"transform rotate-180": props.menu.activeDropdown})}/>)}

    </div>
}

export default SideBarItem