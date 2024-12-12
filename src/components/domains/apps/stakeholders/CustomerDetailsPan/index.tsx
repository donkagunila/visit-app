import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {SpinnerIcon} from "../../../../base/icons/SpinnerIcon.tsx";
import SlideOver from "../../../../base/SlideOver";
import {twMerge} from "tailwind-merge";
import Lucide from "../../../../base/Lucide";
import Button from "../../../../base/buttons/Button";
import {toast} from "react-toastify";
import {formatMoney} from "../../../../../utils/general.helpers.ts";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";

interface Props {
    open: boolean;
    customerId: string;
    onClose: () => void;
}

const CustomerDetailsPan = ({open, customerId, onClose}: Props) => {

    const fetchUrl: string = `/customers/${customerId}`;
    const {
        data, error, loading
    } = useDataFetch<any>({
        type: "detail",
        id: customerId,
        url: fetchUrl,
        api: Constants.API_URLS.DEFAULT
    })

    if (!loading && error) {
        const errorMessage = "Error " + error;
        toast.error(errorMessage, {
            toastId: "ERROR_FETCHING_DATA"
        })
    }

    return (
        <SlideOver open={open} onClose={onClose}>
            <div className={"w-[40rem] bg-slate-100 h-full overflow-y-auto"}>
                <div className="bg-white h-full rounded-lg">
                    <header
                        className={twMerge(
                            "flex items-center justify-between font-medium text-slate-700 sticky top-0 shadow-sm z-20  px-5 py-4 bg-white",
                        )}>
                        <h1> Customer Details</h1>
                        <div className="flex gap-2 items-center">
                            <div>
                                <button
                                    className="border border-slate-200 text-slate-400 p-2 rounded-md hover:bg-primary hover:text-white hover:border-primary transition duration-200">
                                    <Lucide icon="Pencil" className="h-3 w-3"/>
                                </button>
                            </div>
                            <div className="text-slate-400 font-light">|</div>
                            <button
                                tabIndex={-1}
                                onClick={onClose}
                                className={twMerge(
                                    "h-8 w-8 bg-transparent rounded-full active:ring-primary/70 focus:ring-primary/70 focus:bg-primary-100 focus:text-primary-600 hover:text-primary-600 hover:bg-primary-50 text-gray-400 p-0  justify-center items-center flex",
                                )}
                            >
                                <Lucide icon={"X"} className={"h-4 w-4"}/>
                            </button>
                        </div>
                    </header>

                    {!loading && data && (
                        <div>

                            <div className="py-3 px-6">
                                <div className="border border-slate-200 rounded-md">
                                    <div className="flex justify-between items-center py-3 px-3">
                                        <div className="flex items-center gap-2">
                                            <Avatar name={data.name} round size="50"/>
                                            <div className="font-semibold">
                                                <div className="uppercase text-[0.554rem] text-slate-400/80">Customer
                                                </div>
                                                <div className="text-slate-500 text-sm capitalize">{data.name}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-xs text-slate-400">Status</div>
                                            <div
                                                className="text-[0.6432rem] text-green-600 border px-3 py-1 rounded-md flex justify-center items-center gap-2">
                                                <div><Lucide icon="Dot" className="h-2 w-2 bg-green-500 rounded-md"/>
                                                </div>
                                                <div className="font-semibold">Active</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

                            {data.sales.length == 0 && (
                                <div className="py-3 px-6">
                                    <div className="border border-blue-200 bg-blue-100 px-3 py-1.5 rounded-md">
                                        <div className="flex items-center gap-3 text-xs justify-between ">
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <Lucide icon="Clock" className="h-3 w-3 text-blue-500"/>
                                                </div>
                                                <div className="text-slate-500">
                                                    This customer has not purchased any Items, Please follow up
                                                </div>
                                            </div>

                                            <div>
                                                <Link to={`tel:${data.phoneNumber}`} target="_blank"
                                                      className="text-blue-500 text-xs flex items-center">
                                                    <Lucide icon="Phone" className="mr-1 h-3 w-3"/>Call
                                                    Customer</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-2 py-4 px-6">

                                <div className="col-span-1 flex gap-3">
                                    <div>
                                        <div className="bg-slate-200/60 text-slate-500 p-3 rounded-md">
                                            <Lucide icon="Clock" className="h-4 w-4"/>
                                        </div>
                                    </div>
                                    <div className="font-semibold">
                                        <div className="uppercase text-[0.554rem] text-slate-400/80">Registered</div>
                                        <div
                                            className="text-slate-500 text-xs">{formatReadableDate(data.createdAt)}</div>
                                    </div>
                                </div>

                                <div className="col-span-1 flex gap-3">
                                    <div>
                                        <div className="bg-slate-200/60 text-slate-500 p-3 rounded-md">
                                            <Lucide icon="User" className="h-4 w-4"/>
                                        </div>
                                    </div>
                                    <div className="font-semibold">
                                        <div className="uppercase text-[0.554rem] text-slate-400/80">Createdt by</div>
                                        <div className="text-slate-500 text-xs">{data.createdBy}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-y border-slate-200 py-3 px-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="text-slate-500 text-sm">Total Sales:</div>
                                        <div className="text-slate-600 font-semibold">
                                            {formatMoney(data?.sales.reduce((sum: number, sale: any) => sum + sale.total || 0, 0)) || 0.00}
                                            <span
                                                className="text-xs text-slate-400 ml-1 font-normal">TZS
                                    </span>
                                        </div>

                                    </div>
                                    <div>
                                        <Button variant="secondary" className="text-xs border-slate-200">View
                                            Sales</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-3">
                                <div className="text-sm font-semibold text-slate-500">
                                    General Info
                                </div>
                                <div className="py-4">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">FullName</div>
                                            <div className="text-slate-500 text-sm">{data.name}</div>
                                        </div>

                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">Type
                                            </div>
                                            <div className="text-slate-500 text-sm capitalize">{data.type ?? "-"}</div>
                                        </div>

                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">Phone Number
                                            </div>
                                            <div className="text-slate-500 text-sm">{data.phoneNumber}</div>
                                        </div>

                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">Email Address
                                            </div>
                                            <div className="text-slate-500 text-sm">{data.emailAddress}</div>
                                        </div>

                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">City</div>
                                            <div className="text-slate-500 text-sm">{data.city ?? "-"}</div>
                                        </div>

                                        <div className="font-semibold">
                                            <div className="uppercase text-[0.554rem] text-slate-400/80">Address</div>
                                            <div className="text-slate-500 text-sm">{data.address}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {loading && (
                        <div className="h-[calc(100vh-200px)] flex justify-center items-center">
                            <SpinnerIcon/>
                        </div>
                    )}

                </div>
            </div>
        </SlideOver>
    );
};

export default CustomerDetailsPan;