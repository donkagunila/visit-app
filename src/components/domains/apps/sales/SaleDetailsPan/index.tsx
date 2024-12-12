import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import SlideOverHeader from "../../../../base/SlideOver/slide-over-header.tsx";
import {SpinnerIcon} from "../../../../base/icons/SpinnerIcon.tsx";
import clsx from "clsx";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import SlideOver from "../../../../base/SlideOver";
import {formatMoney} from "../../../../../utils/general.helpers.ts";

interface Props {
    open: boolean;
    saleId: string;
    onClose: () => void;
}

const SaleDetailsPan = ({open, saleId, onClose}: Props) => {

    const fetchUrl: string = `/sales/sale/${saleId}`;
    const {
        data, error, loading
    } = useDataFetch<any>({
        type: "detail",
        id: saleId,
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
            <div className={"w-[30rem] bg-slate-100 h-full p-2 overflow-y-auto"}>
                <div className="bg-white h-full rounded-lg">
                    <SlideOverHeader className="rounded-t-lg" title={"Sale Entry Details"} onClose={onClose}/>
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
                                        <div>
                                            <small className="text-slate-400">Batch</small>
                                            <h1
                                                className={
                                                    "text-lg text-slate-500  capitalize font-semibold"
                                                }
                                            >
                                                {data.stock?.batchName}
                                            </h1>
                                        </div>
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
                                        <div className="text-slate-500 text-sm p-1">Sale Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Sold Products</div>
                                                    <div
                                                        className="font-semibold">
                                                        <span> {data.quantity} Trays</span>

                                                    </div>
                                                </li>


                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Price Per item</div>
                                                    <div>{formatMoney(data.amount)}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Total Sale Amount</div>
                                                    <div>{formatMoney(data.total)}</div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">Customer Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Customer Name</div>
                                                    <div>{data.customer?.name ?? "Guest"}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Customer Purchase Index</div>
                                                    <div>0</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">User Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Created By</div>
                                                    <div>{data.createdBy}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Date</div>
                                                    <div>{formatReadableDate(data.createdAt)}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">Update Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Updated By</div>
                                                    <div>{data.updatedBy ?? '-'}</div>
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

export default SaleDetailsPan;