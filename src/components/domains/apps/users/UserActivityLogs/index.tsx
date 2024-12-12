import {toast} from "react-toastify";
import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import DataTable from "../../../../base/Table/DataTable";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import VerticalBarChart from "../../../../charts/VerticalBarChart";
import {useEffect, useState} from "react";

interface Props {
    userId: string
}


const UserActivityLogs = ({userId}: Props) => {


    const fetchUrl: string = `/audit-logs/${userId}`;

    const [labels, setLabels] = useState<any[]>([]);
    const [dataSets, setDataSets] = useState<any[]>([]);


    const {
        data, error, loading
    } = useDataFetch<any>({
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

    console.log("data", data)

    useEffect(() => {

        if (data?.chart) {
            console.log(data.chart)

            const dataArray: any[] = []
            const labelArray: any[] = []
            data.chart.map((item: any) => {
                dataArray.push(item.count)
                labelArray.push(formatReadableDate(item.date))
            })

            console.log(dataArray);
            setLabels(labelArray)
            setDataSets(dataArray);
        }

    }, [data])


    return (
        <div>

            {data && labels.length >= 1 && (

                <div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className="box px-4 pb-4 my-3 mx-4">
                                <div className="border-b border-slate-100 py-3 px-3">
                                    <div className="text-slate-500">User Activities</div>
                                    <div className="text-xs text-slate-400">Activities done by the user in the past 7
                                        days
                                    </div>
                                </div>
                                <VerticalBarChart
                                    barWidth={10}
                                    barRadius={22}
                                    height={320}
                                    yGridDisplay={true}
                                    labels={labels}
                                    items={[
                                        {
                                            data: dataSets,
                                            color: "#22c55e"
                                        }
                                    ]}
                                    // items={[
                                    //     {
                                    //         data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                                    //         color: "#22c55e"
                                    //     },
                                    //     {
                                    //         data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                                    //         color: "#e5e5e5"
                                    //     }
                                    // ]}
                                />
                            </div>
                        </div>

                        <div className="col-span-6 box border my-3 mx-3">
                            <DataTable flat
                                       recordsPerPage={5}
                                       loading={loading}
                                       columns={[

                                           {
                                               name: "action",
                                               field: "auditLog",
                                           },
                                           {
                                               name: "path",
                                               field: "path",
                                               render: (row: any) => {
                                                   return <div>{row.method}:: {row.path}</div>
                                               }
                                           },
                                          

                                           {
                                               name: "Created",
                                               field: "createdAt",
                                               render: (row: any) => {
                                                   return (
                                                       <div>{formatReadableDate(row.createdAt)}</div>
                                                   )
                                               }
                                           },
                                       ]}
                                       rows={data && data.audits && data.audits.length > 0 ? data.audits : []}/>
                        </div>
                    </div>

                </div>
            )}
        </div>

    );
}

export default UserActivityLogs