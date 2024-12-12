import {twMerge} from "tailwind-merge";
import {Dialog as HeadlessDialog, Transition} from "@headlessui/react";
import React, {createContext, Fragment, useContext, useRef, useState} from "react";
import {SpinnerIcon} from "../../base/icons/SpinnerIcon.tsx";

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

const dialogContext = createContext<{
    open: boolean;
    zoom: boolean;
    size: Size;
}>({
    open: false,
    zoom: false,
    size: "md"
});

const Dialog = ({
                    children,
                    className,
                    as = "div",
                    open = false,
                    onClose,
                    staticBackdrop,
                    size = "md",
                    ...props
                }: React.ComponentPropsWithoutRef<typeof HeadlessDialog> & {
    size?: Size;
    staticBackdrop?: boolean;
}) => {
    const focusElement = useRef<HTMLElement | null>(null);
    const [zoom, setZoom] = useState(false);

    return (
        <dialogContext.Provider
            value={{
                open: open,
                zoom: zoom,
                size: size
            }}
        >
            <Transition appear as={Fragment} show={open}>
                <HeadlessDialog
                    as={as}
                    onClose={(value) => {
                        if (!staticBackdrop) {
                            return onClose(value);
                        } else {
                            setZoom(true);
                            setTimeout(() => {
                                setZoom(false);
                            }, 300);
                        }
                    }}
                    initialFocus={focusElement}
                    className={twMerge(["relative z-[60] h-screen flex justify-center items-center", className])}
                    {...props}
                >
                    {children}
                </HeadlessDialog>
            </Transition>
        </dialogContext.Provider>
    );
};

export const DialogPanel = ({
                                children,
                                className,
                                as = "div",
                                ...props
                            }: React.ComponentPropsWithoutRef<typeof HeadlessDialog.Panel> & {
    size?: Size;
}) => {
    const dialog = useContext(dialogContext);
    return (
        <>
            <Transition.Child
                as="div"
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-[400ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed inset-0 bg-black/60"
                aria-hidden="true"
            />
            <Transition.Child
                as="div"
                enter="ease-in-out duration-500"
                enterFrom="opacity-0 -mt-16"
                enterTo="opacity-100 mt-0 pt-16"
                leave="ease-in-out duration-[400ms]"
                leaveFrom="opacity-100 pt-16"
                leaveTo="opacity-0 -mt-16 pt-0"
                className="fixed inset-0 pb-16 overflow-y-auto"
            >
                <HeadlessDialog.Panel
                    as={as}
                    className={twMerge([
                        "w-[90%] top-[20%]  mx-auto bg-white relative rounded-md shadow-md transition-transform dark:bg-darkmode-600",
                        dialog.size === "md" && "sm:w-[460px]",
                        dialog.size === "sm" && "sm:w-[300px]",
                        dialog.size === "lg" && "sm:w-[600px]",
                        dialog.size === "xl" && "sm:w-[600px] lg:w-[900px]",
                        dialog.size === "2xl" && "sm:w-[600px] lg:w-[1200px]",
                        dialog.zoom && "scale-105",
                        className
                    ])}
                    {...props}
                >
                    {children}
                </HeadlessDialog.Panel>
            </Transition.Child>
        </>
    );
};

export const DialogTitle = ({
                                children,
                                className,
                                as = "div",
                                ...props
                            }: React.ComponentPropsWithoutRef<typeof HeadlessDialog.Title>) => {
    return (
        <HeadlessDialog.Title
            as={as}
            className={twMerge([
                "flex items-center px-5 py-5 border-b border-slate-200/60 dark:border-darkmode-400",
                className
            ])}
            {...props}
        >
            {children}
        </HeadlessDialog.Title>
    );
};

export const DialogDescription = ({
                                      children,
                                      className,
                                      as = "div",
                                      ...props
                                  }: React.ComponentPropsWithoutRef<typeof HeadlessDialog.Description>) => {
    return (
        <HeadlessDialog.Description
            as={as}
            className={twMerge(["p-5", className])}
            {...props}
        >
            {children}
        </HeadlessDialog.Description>
    );
};


interface DialogLoadingProps {
    show: boolean;
    className?: string;
    as?: React.ElementType;
    title?: string;
    description?: string;
}

export const DialogLoading = ({
                                  className,
                                  as = "div",
                                  ...props
                              }: DialogLoadingProps) => {
    return (
        <HeadlessDialog.Description
            as={as}
            className={twMerge([className])}
            {...props}
        >
            <div className="flex p-1">
                <div
                    className={twMerge(['flex justify-center items-center flex-col min-h-[300px] gap-1 p-5'], props.show ? "flex" : "hidden")}>
                    <SpinnerIcon/>
                    <h2 className="text-slate-600 mt-3">{props.title ?? "Loading"}</h2>
                    <p className="text-slate-400 text-xs">
                        {props.description ?? "Please wait, We are loading the data..."}
                    </p>
                </div>
            </div>
        </HeadlessDialog.Description>
    );
};

export const DialogFooter = <C extends React.ElementType = "div">({
                                                                      children,
                                                                      className,
                                                                      as,
                                                                      ...props
                                                                  }: {
    as?: C;
} & React.PropsWithChildren &
    React.ComponentPropsWithoutRef<C>) => {

    return (
        <div
            className={twMerge([
                "px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400",
                className
            ])}
            {...props}
        >
            {children}
        </div>
    );
};

export default Dialog;
