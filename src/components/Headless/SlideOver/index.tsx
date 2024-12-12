import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Lucide from "../../base/Lucide";

interface SlideOverProps {
    open: boolean,
    onClose: () => void,
    children: React.ReactElement
}

export default function SlideOver( props: SlideOverProps) {

    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={ () => props.onClose && props.onClose()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">

                                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-darkmode-600 shadow-xl">
                                        <div className="text-white flex justify-end items-center py-3 px-4">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="absolute right-5 rounded-md text-slate-500 hover:text-slate-700 dark:text-slate-300"
                                                    onClick={() => props.onClose && props.onClose()}
                                                >
                                                    <span className="absolute -inset-2.5"/>
                                                    <span className="sr-only">Close panel</span>
                                                    <Lucide icon={"CircleX"} className="h-6 w-6" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {props.children}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
