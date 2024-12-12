import {Tab} from "@headlessui/react";
import {twMerge} from "tailwind-merge";
import {icons} from "lucide-react";
import Lucide from "../../base/Lucide";
import React from 'react'


type Tabs = {
    title: string,
    icon?: keyof typeof icons;
    content: React.ReactElement
}

interface TabbedProps {
    tabs: Tabs[]
}


const Tabbed = (props: TabbedProps) => {
    const {tabs} = props;
    return (
        <div className="w-full px-2 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-3 bg-white border-b border-slate-200 overflow-x-auto cursor-pointer">
                    {tabs.map((tab) => (
                        <div key={tab.title} className="cursor-pointer tab-holder">
                            <Tab className={({selected}) => twMerge([
                                "py-3 px-5 outline-none capitalize text-slate-500 text-xs w-full xl:min-w-[80px] ",
                                "border-b-2 border-transparent dark:border-transparent cursor-pointer",
                                selected && "border-primary text-primary font-medium"
                            ])}>
                                <div className={"flex justify-center items-center cursor-pointer w-full"}>
                                    {tab.icon && (
                                        <Lucide icon={tab.icon} className={"mr-2 h-3.5 w-3.5"}/>
                                    )}
                                    <span className="text-nowrap">
                                         {tab.title}
                                    </span>

                                </div>
                            </Tab>
                        </div>
                    ))}
                </Tab.List>


                <Tab.Panels>
                    {tabs.map((tab) => (
                        <div key={tab.title}>
                            <Tab.Panel>
                                <div>{tab.content}</div>
                            </Tab.Panel>
                        </div>
                    ))}
                </Tab.Panels>

            </Tab.Group>


        </div>
    );
};

export default Tabbed;