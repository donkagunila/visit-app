import {FC} from "react";
import {twMerge} from "tailwind-merge";
import Lucide from "../Lucide";

interface Props {
    title: string;
    className?: string;
    buttonClassName?: string;
    onClose: () => void;
}

const SlideOverHeader: FC<Props> = (props) => {
    const {onClose: handleClose, title, className, buttonClassName} = props;
    return (
        <header
            className={twMerge(
                "flex items-center justify-between font-medium text-slate-700 sticky top-0 shadow-sm z-20  px-5 py-4 bg-white",
                className,
            )}
        >
            <h1> {title}</h1>
            <button
                tabIndex={-1}
                onClick={handleClose}
                className={twMerge(
                    "h-8 w-8 bg-transparent rounded-full active:ring-primary/70 focus:ring-primary/70 focus:bg-primary-100 focus:text-primary-600 hover:text-primary-600 hover:bg-primary-50 text-gray-400 p-0  justify-center items-center flex",
                    buttonClassName,
                )}
            >
                <Lucide icon={"X"} className={"h-4 w-4"}/>
            </button>
        </header>
    );
};
export default SlideOverHeader;
