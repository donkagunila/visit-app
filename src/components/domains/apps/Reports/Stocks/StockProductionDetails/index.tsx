import useDataFetch from "../../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../../config/env.ts";
import {toast} from "react-toastify";
import DataTable from "../../../../../base/Table/DataTable";
import {calculateTotalValue, findHighestAmountItem, formatMoney} from "../../../../../../utils/general.helpers.ts";
import {formatReadableDate} from "../../../../../../utils/date.helper.ts";
import {twMerge} from "tailwind-merge";


interface Props {
    stockId: string
}


const StockProductionDetails = ({stockId}: Props) => {


    const fetchUrl: string = `/collections/stock/${stockId}`;


    const {
        data, error, loading
    } = useDataFetch<any[]>({
        type: "main",
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
        <div className="grid grid-cols-12 gap-2">
            <div className={twMerge(["col-span-12 md:col-span-9", data && data.length == 0 && 'md:col-span-12'])}>
                <div className="my-3 ml-3">
                    <DataTable
                        loading={loading}
                        columns={
                            [{
                                name: "Batch",
                                field: "batches",
                                render: (row: any) => {
                                    console.log(row)
                                    return <div> {row.stock?.batchName}</div>
                                }
                            },
                                {
                                    name: "Trays",
                                    field: "trays"
                                },
                                {
                                    name: "Eggs",
                                    field: "eggs"
                                },
                                {
                                    name: "breakage",
                                    field: "breakage"
                                },
                                {
                                    name: "Total",
                                    field: "total"
                                },

                                {
                                    name: "Broke Percentage",
                                    field: "percentage",
                                    render: (row: any) => {
                                        const percent = formatMoney((Number(row.breakage) / Number(row.total)) * 100)
                                        return (<div>{percent} %</div>)
                                    }
                                },
                                {
                                    name: "Mortality",
                                    field: "mortality"
                                },

                                {
                                    name: "Date",
                                    field: "createdAt",
                                    render: (row: any) => {
                                        return (
                                            <div>
                                                {formatReadableDate(row.createdAt)}
                                            </div>
                                        )
                                    }
                                },]
                        }
                        rows={data && data.length > 0 ? data : []}/>
                </div>
            </div>

            {data && data.length >= 1 && (
                <div className="col-span-12 md:col-span-3">
                    <div className=" my-3 mx-3 box rounded-md overflow-hidden">
                        <div className="py-4 px-4 text-sm text-white bg-primary">
                            <div>Production Summary</div>
                        </div>
                        <div>
                            <ul className="text-xs text-slate-500">
                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Total Collection</div>
                                    <div
                                        className="font-semibold">
                                        <span> {(calculateTotalValue(data, 'trays'))} Trays</span>
                                        <span
                                            className="ml-2">{calculateTotalValue(data, 'eggs')} Eggs</span>
                                        <span
                                            className="ml-2">{calculateTotalValue(data, 'breakage')} Breakage</span>
                                    </div>
                                </li>

                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Number of Collections</div>
                                    <div>{data.length}</div>
                                </li>


                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Top Collection Count</div>
                                    <div>
                                         <span>
                                            {findHighestAmountItem(data).trays} Trays
                                        </span>
                                        <span className="ml-2">
                                            {findHighestAmountItem(data).eggs} Eggs
                                        </span>
                                        <span className="ml-2">
                                            {findHighestAmountItem(data).breakage} Breakage
                                        </span>

                                    </div>
                                </li>

                                <li className="flex justify-between py-4 px-4">
                                    <div>Top Collection Date</div>
                                    <div>{formatReadableDate(findHighestAmountItem(data).createdAt) ?? '-'}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default StockProductionDetails