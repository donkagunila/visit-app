import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import SlideOverHeader from "../../../../base/SlideOver/slide-over-header.tsx";
import {SpinnerIcon} from "../../../../base/icons/SpinnerIcon.tsx";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import SlideOver from "../../../../base/SlideOver";

interface Props {
    open: boolean;
    collectionId: string;
    onClose: () => void;
}

const ProductionDetailsPan = ({open, collectionId, onClose}: Props) => {

    const fetchUrl: string = `/collections/collection/${collectionId}`;
    const {
        data, error, loading
    } = useDataFetch<any>({
        type: "detail",
        id: collectionId,
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
                                    <div>
                                        <div className="text-slate-500 text-sm p-1">Collection Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Collected Trays</div>
                                                    <div
                                                        className="font-semibold">
                                                        <span> {data.trays} Trays</span>
                                                    </div>
                                                </li>


                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Collected Eggs</div>
                                                    <div className="font-semibold">{data.eggs} Eggs</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Breakage</div>
                                                    <div className="font-semibold">{data.breakage} Eggs</div>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="text-slate-500 text-sm p-1">Stock Details</div>
                                        <div className="border rounded px-3">
                                            <ul className="text-sm text-slate-500 capitalize">
                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Batch Name</div>
                                                    <div>{data.stock?.batchName}</div>
                                                </li>

                                                <li className="border-b border-slate-200 border-dashed py-2">
                                                    <div className="text-slate-400/90">Start Stock</div>
                                                    <div>{data.stock.startStock}</div>
                                                </li>

                                                <li className="py-3">
                                                    <div className="text-slate-400/90">Current Stock</div>
                                                    <div>{data.stock?.currentStock}</div>
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

export default ProductionDetailsPan;