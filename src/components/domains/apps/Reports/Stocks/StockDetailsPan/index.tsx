import SlideOver from "../../../../../base/SlideOver";
import SlideOverHeader from "../../../../../base/SlideOver/slide-over-header.tsx";
import useDataFetch from "../../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../../config/env.ts";
import {toast} from "sonner";
import {SpinnerIcon} from "../../../../../base/icons/SpinnerIcon.tsx";
import {formatReadableDate} from "../../../../../../utils/date.helper.ts";
import clsx from "clsx";
import Lucide from "../../../../../base/Lucide";

interface Props {
    open: boolean;
    stockId: string;
    onClose: () => void;
}

const StockDetailsPan = ({open, stockId, onClose}: Props) => {


    const fetchUrl: string = `/stocks/stock/${stockId}`;
    const {
        data, error, loading
    } = useDataFetch<any>({
        type: "detail",
        id: stockId,
        url: fetchUrl,
        api: Constants.API_URLS.DEFAULT
    })

    if (!loading && error) {
        const errorMessage = "Error " + error;
        toast.error(errorMessage, {
            id: "ERROR_FETCHING_DATA"
        })
    }

    return (
        <SlideOver open={open} onClose={onClose}>
            <div className={"w-[30rem] bg-slate-100 h-full p-2 overflow-y-auto"}>
                <div className="bg-white h-full rounded-lg">
                    <SlideOverHeader className="rounded-t-lg" title={"Stock Details"} onClose={onClose}/>
                    <div className={"p-5 pb-14 space-y-10"}>

                        {loading && (
                            <div className="h-[calc(100vh-200px)] flex justify-center items-center">
                                <SpinnerIcon/>
                            </div>
                        )}

                        {!loading && data && (
                            <div className={"space-y-2 "}>
                                <div className={"items-between w-full"}>
                                    <div className={"flex justify-between items-center space-x-2 mx-1"}>
                                        <h1
                                            className={
                                                "text-lg text-slate-500  capitalize font-semibold"
                                            }
                                        >
                                            {data.batchName}
                                        </h1>
                                        <div
                                            className={clsx([
                                                "flex text-xs",
                                                {"text-green-600": data.isActive},
                                                {"text-red-600": !data.isActive}
                                            ])}
                                        >
                                            {data.isActive ? "Active" : "Inactive"}
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">Stock Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Start Stock</div>
                                                    <div>{data.startStock}</div>
                                                </li>

                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Current Stock</div>
                                                    <div>{data.currentStock}</div>
                                                </li>

                                                <li className=" py-3">
                                                    <div className="text-slate-400/90">Age</div>
                                                    <div>{data.age}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-3">


                                        <div>
                                            {/*<BatchPerformanceBar*/}
                                            {/*    title="Current Batch Stock"*/}
                                            {/*    minValue={0}*/}
                                            {/*    maxValue={Number(data.startStock - data.currentStock)}*/}
                                            {/*    currentValue={Number(data.currentStock)}*/}
                                            {/*    percentage={Number((data.currentStock / data.startStock) * 100)}*/}
                                            {/*/>*/}
                                            
                                        </div>
                                        <div className="text-slate-500 text-sm p-1">Mortality Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Mortality</div>
                                                    <div>{Number(data.startStock - data.currentStock).toLocaleString()}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Percentage Loss</div>
                                                    <div>{Number(100 - (data.currentStock / data.startStock) * 100).toLocaleString()}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">User Details</div>
                                        <div className="grid grid-cols-2 py-4 px-2">

                                            <div className="col-span-1 flex gap-3">
                                                <div>
                                                    <div className="bg-slate-200/60 text-slate-500 p-3 rounded-md">
                                                        <Lucide icon="Clock" className="h-4 w-4"/>
                                                    </div>
                                                </div>
                                                <div className="font-semibold">
                                                    <div
                                                        className="uppercase text-[0.554rem] text-slate-400/80">Date
                                                    </div>
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
                                                    <div className="uppercase text-[0.554rem] text-slate-400/80">Created
                                                        by
                                                    </div>
                                                    <div className="text-slate-500 text-xs">{data.createdBy}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">Update Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Updated By</div>
                                                    <div>{data.updatedBy ?? 'system'}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Last Update Date</div>
                                                    <div>{formatReadableDate(data.updatedAt)}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideOver>
    );
};

export default StockDetailsPan;