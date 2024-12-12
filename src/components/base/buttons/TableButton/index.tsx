import Button from "../Button";
import {Link} from "react-router-dom";
import Lucide from "../../Lucide";
import {twMerge} from "tailwind-merge";
import {icons} from "lucide-react";

interface IViewButtonProps {
    url: string;
    type: "view" | "edit" | "delete" | "custom",
    title: string,
    icon?: keyof typeof icons,
    className?: string
}

const TableButton = (props: IViewButtonProps) => {
    return (
        <div className="btn-group">
            <Link to={props.url}>
                <Button
                    className={twMerge([
                        "text-xs min-w-[60px] cursor-pointer shadow-none border-none py-1.5 px-3",
                        props.type == "view" && "bg-primary text-white",
                        props.type == "edit" && "bg-blue-500 text-white",
                        props.type == "delete" && "bg-red-500 text-white",
                        props.className])}>
                    {props.icon && (<Lucide icon={props.icon} className="w-3 h-3 mr-2"/>)}
                    {props.title}
                </Button>
            </Link>
        </div>
    );
};

export default TableButton;
