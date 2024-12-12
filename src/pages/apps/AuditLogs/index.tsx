import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import {formatReadableDate} from "../../../utils/date.helper.ts";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";


const AuditLogsPage = () => {


    const fetchUrl: string = "/audit-logs"
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
        <MainLayout title="Audit Logs">
            <div>
                <DataTable
                    flat
                    columns={[
                        {
                            name: "username",
                            field: "username",
                            render: (row: any) => {

                                return (
                                    <Link to={`/users/${row.user?.id}`} className="cursor-pointer">
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <Avatar
                                                round
                                                textSizeRatio={2.75}
                                                size={"30"}
                                                name={row.username}
                                                alt="User"
                                            />

                                            <div>
                                                <div>{row.user?.fullName}</div>
                                                <div className="text-xs text-slate-400">{row.user?.username}</div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        },
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
                            name: "Ip Address",
                            field: "ipAddress",
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
                    rows={data && data.length > 0 ? data : []}
                    loading={loading}
                />
            </div>


        </MainLayout>
    );
}

export default AuditLogsPage