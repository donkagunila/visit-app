import {Link} from "lucide-react";
import {Popover, Transition} from "@headlessui/react";
import Lucide from "../../../components/base/Lucide";
import {Fragment} from "react";

const NavBar = () => {
    return (
        <header
            className="min-h-[50px] fixed top-0 left-0 z-40 flex w-full bg-white  border-b border-slate-200  dark:bg-boxdark dark:drop-shadow-none">
            <div className="px-4 py-4 flex flex-grow items-center justify-between md:px-6 2xl:px-11">
                {/* Small Devices*/}
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <Link to="/">
                        <span>Visit Insurance</span>
                    </Link>
                </div>

                {/* Large Devices*/}
                <div className="hidden sm:block">
                </div>


                <div className="flex items-center justify-center gap-3 2xsm:gap-7">
                    <div>
                        <Popover className="relative">
                            <div>
                                <Popover.Button>
                                    <span>
                                        <Lucide icon={"Bell"} className="w-5 h-5 dark:text-slate-500"/>
                                    </span>
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-30">

                                        test me
                                    </Popover.Panel>
                                </Transition>
                            </div>
                        </Popover>
                    </div>


                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <li className="relative text-primary">Bell here</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar;