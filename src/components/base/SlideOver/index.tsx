import {Dialog, Transition} from "@headlessui/react";
import {FC, Fragment, ReactNode} from "react";

export interface IProps {
    children: ReactNode;
    dialogClass?: string;
    onClose: (value: boolean) => void;
    open: boolean;
}

const SlideOver: FC<IProps> = ({onClose, open, children, dialogClass}) => {
    return (
        <Transition appear show={open} as={"div"}>
            <Dialog
                onClose={onClose}
                className={`${dialogClass} fixed top-4 right-4 bottom-4 rounded-xl overflow-hidden z-40`}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed backdrop-blur-[0.8px]  inset-0 bg-black/30 transition-opacity"/>
                </Transition.Child>

                <Transition.Child
                    className={"h-full relative"}
                    enter="transform transition ease-in-out duration-300 "
                    enterFrom=" translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-300 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className={"h-full relative bg-white"}>{children}</div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};
export default SlideOver;
