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


const StockExpenseDetails = ({stockId}: Props) => {


    const fetchUrl: string = `/expenditures/stock/${stockId}`;


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
                        columns={[
                            {
                                name: "Batch",
                                field: "batch",
                                render: (row: any) => {
                                    return (
                                        <div>{row.stock?.batchName}</div>
                                    )
                                }
                            },
                            {
                                name: "Expense Type",
                                field: "type",
                                render: (row: any) => {
                                    return (
                                        <div className="capitalize">
                                            {row.type}
                                        </div>
                                    )
                                }
                            },
                            {
                                name: "Expense Amount",
                                field: "amount",
                                render: (row: any) => {
                                    return (
                                        <div className="">
                                            {formatMoney(Number(row.amount))}
                                        </div>
                                    )
                                }
                            },
                            {
                                name: "Remarks",
                                field: "remarks"
                            },
                            {
                                name: "Logged By",
                                field: "createdBy"
                            },
                            {
                                name: "Logged At",
                                field: "createdAt",
                                render: (row: any) => {
                                    return (
                                        <div>
                                            {formatReadableDate(row.createdAt)}
                                        </div>
                                    )
                                }
                            },

                        ]}
                        rows={data && data.length > 0 ? data : []}/>
                </div>
            </div>

            {data && data.length >= 1 && (
                <div className="col-span-12 md:col-span-3">
                    <div className=" my-3 mx-3 box rounded-md overflow-hidden">
                        <div className="py-4 px-4 text-sm text-white bg-primary">
                            <div>Expense Summary</div>
                        </div>
                        <div>
                            <ul className="text-xs text-slate-500">
                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Total Expenses</div>
                                    <div
                                        className="font-semibold">{formatMoney(calculateTotalValue(data, 'amount'))}</div>
                                </li>

                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Number of Expenses</div>
                                    <div>{data.length}</div>
                                </li>
                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Top Expense Type</div>
                                    <div>{findHighestAmountItem(data).type ?? '-'}</div>
                                </li>

                                <li className="flex justify-between py-4 px-4 border-b border-dashed border-slate-200">
                                    <div>Top Expense Amount</div>
                                    <div>{formatMoney(findHighestAmountItem(data).amount) ?? '-'}</div>
                                </li>

                                <li className="flex justify-between py-4 px-4">
                                    <div>Top Expense Date</div>
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

export default StockExpenseDetails