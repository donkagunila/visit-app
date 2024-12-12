import Lucide from "../Lucide";
import {icons} from "lucide-react";
import {twMerge} from "tailwind-merge";

interface Props {
    title: string,
    value: string | number,
    icon: keyof typeof icons,
    iconColor?: string
}

const StatCard = (props: Props) => {
    return (
        <div className="rounded-lg bg-white border border-slate-200 text-slate-600 px-1 py-2 mt-2">
            <div className="flex gap-3 justify-between items-center">
                <div className="p-3">
                    <div
                        className={twMerge(["bg-amber-500 h-[60px] w-[60px] flex justify-center items-center rounded-lg text-white", props.iconColor])}>
                        <Lucide icon={props.icon} className="h-4 w-4 xl:h-5 xl:w-5"/>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-sm text-slate-500">{props.title}</div>
                    <div className="text-[1.4rem] font-semibold text-slate-600">
                        {props.value}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default StatCard;