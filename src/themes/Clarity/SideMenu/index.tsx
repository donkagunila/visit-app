import {Outlet} from "react-router-dom";
import NavBar from "../../shared/NavBar";
import { Link } from "react-router-dom";
import Lucide from "../../../components/base/Lucide";


const ClaritySideMenu = () => {
    return (
        <div>
            <div className="flex overflow-hidden">
                {/* Start:: Side Menu */}
                <nav className="w-[85px] xl:w-[260px] px-5 pb-16 overflow-x-hidden z-50 pt-32 -mt-4 md:block border-r border-slate-200 relative bg-white dark:bg-slate-800">
                    <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link to={'/'}
                                      className="flex justify-center items-center md:gap-2 px-3 py-3 rounded-md bg-primary text-white">
                                    <Lucide icon="LayoutGrid" className="h-4 w-4"/>
                                    <span className="text-sm flex-1 hidden xl:block">Dashboard</span>
                                    <Lucide icon="ChevronDown" className="h-4 w-5 hidden xl:block"/>
                                </Link>
                            </li>
                        </ul>
                        <h3 className="mb-4 ml-1 text-xs uppercase text-slate-400 border-t border-slate-200 pt-2">
                            <span className="hidden xl:block">Crafted</span>
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link to={'/'}
                                      className="flex justify-center items-center md:gap-2 px-3 border border-slate-200 py-3 rounded-md text-slate-500">
                                    <Lucide icon="LayoutGrid" className="h-4 w-4"/>
                                    <span className="text-sm flex-1 hidden xl:block">Dashboard</span>
                                    <Lucide icon="ChevronDown" className="h-4 w-5 hidden xl:block"/>
                                </Link>
                            </li>
                        </ul>
                        <h3 className="mb-4 ml-1 text-xs uppercase text-slate-400 border-t border-slate-200 pt-2">
                            <span className="hidden xl:block">Apps</span>
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link to={'/'}
                                      className="flex justify-center gap-2 items-center px-3 border border-slate-200 py-3 rounded-md text-slate-500">
                                    <Lucide icon="LayoutGrid" className="h-4 w-5"/>
                                    <span className="text-sm flex-1 hidden xl:block">Projects</span>
                                    <Lucide icon="ChevronDown" className="h-4 w-5 hidden xl:block"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}
                                      className="flex justify-center gap-2 items-center px-3 border border-slate-200 py-3 rounded-md text-slate-500">
                                    <Lucide icon="LayoutGrid" className="h-4 w-5"/>
                                    <span className="text-sm flex-1 hidden xl:block">eCommerce</span>
                                    <Lucide icon="ChevronDown" className="h-4 w-5 hidden xl:block"/>
                                </Link>
                            </li>
                        </ul>
                        <h3 className="mb-4 ml-1 text-xs uppercase text-slate-400 border-t border-slate-200 pt-2">
                            <span className="hidden xl:block">Documentation</span>
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link to={'/'}
                                      className="flex justify-center gap-2 items-center px-3 border border-slate-200 py-3 rounded-md text-slate-500">
                                    <Lucide icon="LayoutGrid" className="h-4 w-5"/>
                                    <span className="text-sm flex-1 hidden xl:block">components</span>
                                    <Lucide icon="ChevronDown" className="h-4 w-5 hidden xl:block"/>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                {/* End:: Side Menu */}

                {/* Start:: Main Content*/}
                <div
                    className="relative flex-1 flex flex-col max-w-full md:max-w-none  min-w-0 min-h-screen bg-slate-100 pt-[60px]">
                    {/* Start:: NavBar */}
                    <NavBar/>
                    {/* End:: NavBar */}
                    <Outlet/>
                </div>

            </div>
        </div>
);
}

export default ClaritySideMenu