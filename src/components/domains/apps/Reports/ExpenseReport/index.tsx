import DataTable from "../../../../base/Table/DataTable";
import Menu from "../../../../base/headless/Menu";
import Button from "../../../../base/buttons/Button";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import DatePicker from "react-datepicker";
import {useState} from "react";
import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import {formatMoney} from "../../../../../utils/general.helpers.ts";

const ExpenseReport = () => {

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;

    const fetchUrl: string = "/expenditures/report"
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
        <div>
            <DataTable flat
                       columns={[
                           {
                               name: "Date",
                               field: "date",
                               render: (row: any) => {
                                   return <div>
                                       {formatReadableDate(row.date)}
                                   </div>
                               }
                           },
                           {
                               name: "Batch",
                               field: "batchname"
                           },
                           {
                               name: "Amount",
                               field: "amount",
                               render: (row: any) => {
                                   return <div>
                                       {formatMoney(row.amount)}
                                   </div>
                               }
                           },
                       ]}
                       rows={data && data.length > 0 ? data : []}
                       loading={loading}>

                <Menu>
                    <Menu.Button>
                        <Button
                            variant="primary"
                            className="ml-2 text-xs py-2.5 border-slate-500 text-white px-5 flex justify-center items-center gap-1">
                            {startDate && (
                                <div>{formatReadableDate(startDate.toDateString())} </div>
                            )}
                            <span>-</span>
                            {endDate && (
                                <div> {formatReadableDate(endDate.toDateString())}</div>
                            )}

                        </Button>
                    </Menu.Button>
                    <Menu.Items>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            inline
                            maxDate={new Date()}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            monthsShown={2}
                            isClearable={true}
                        />

                    </Menu.Items>
                </Menu>
            </DataTable>
        </div>
    );
};

export default ExpenseReport;