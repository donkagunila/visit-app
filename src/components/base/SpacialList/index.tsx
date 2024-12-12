import Menu, {MenuButton, MenuItem, MenuItems} from "../../Headless/Menu";
import Lucide from "../Lucide";
import Avatar from "react-avatar";

interface Props {
    title: string,
    subtitle?: string,
    owner: {
        key: string,
        subKey?: string,
    },
    details: {
        key: string,
        value: string
    }
    items: any[]
}

const SpacialList = ({title, subtitle, owner, details, items}: Props) => {
    return (
        <div className="box bg-white">
            <div className="box-header flex justify-between items-center">
                <div className="flex-1">
                    <div className="text-slate-500 text-sm font-semibold">{title}</div>
                    {subtitle && (
                        <div className="text-xs text-slate-400">{subtitle}</div>
                    )}
                </div>

                <div className="hidden">
                    <Menu>
                        <MenuButton className="text-slate-500">
                            <Lucide icon="LayoutGrid" className="h-4 w-4"/>
                        </MenuButton>
                        <MenuItems className="w-32 text-xs text-slate-500">
                            <MenuItem>
                                Create New
                            </MenuItem>
                            <MenuItem>
                                View All
                            </MenuItem>

                        </MenuItems>
                    </Menu>
                </div>
            </div>

            <div className="box-content">
                {items && items.map((item: any) => (
                    <div key={item} className="flex justify-between px-3 py-4">
                        <div className="flex gap-2 items-center">
                            <Avatar round size="40" name="DK"/>
                            <div>
                                <div className="text-slate-500 text-sm">{item[owner.key]}</div>
                                {owner.subKey && item[owner.subKey] && (
                                    <div className="text-slate-400 text-xs">{item[owner.subKey]}</div>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="text-slate-500 font-semibold">{item[details.key]}</div>
                            <div className="text-xs text-slate-400">{details.value}</div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default SpacialList;