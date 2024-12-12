import DataTable from "../../../components/base/Table/DataTable";
import {useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import clsx from "clsx";
import CreateUser from "../../../components/domains/apps/users/CreateUser";
import {formatReadableDate} from "../../../utils/date.helper.ts";
import ViewButton from "../../../components/base/buttons/ViewButton";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";


const OperationUsers = () => {

    const fetchUrl: string = "/users?type=OPERATION"
    const [showCreate, setShowCreate] = useState<boolean>(false);

    const {
        data, error, loading, fetchData
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
            <DataTable
                flat
                loading={loading}
                showCreateButton
                createButtonLabel="Create User"
                onCreateButtonClick={() => {
                    setShowCreate(true);
                }}
                columns={[
                    {
                        name: "user",
                        field: "userImage",
                        render: (row: any) => {
                            return (
                                <div className="flex items-center mx-3 gap-2 cursor-pointer">
                                    <Avatar
                                        round
                                        textSizeRatio={2.75}
                                        size={"30"}
                                        name={row.username}
                                        alt="User"
                                    />

                                    <div>
                                        <div>{row.fullName}</div>
                                        <div className="text-xs text-slate-400">{row.username}</div>
                                    </div>
                                </div>
                            )
                        }
                    },

                    {
                        name: "contact",
                        field: "emailAddress",
                        render: (row: any) => {
                            return (
                                <div>
                                    <div>{row.phoneNumber}</div>
                                    <div className="text-primary">
                                        <Link
                                            to={`mailto:${row.emailAddress}`}
                                            target="_blank">{row.emailAddress}</Link></div>
                                </div>
                            )
                        }
                    },

                    {
                        name: "Profile",
                        field: "role"
                    },
                    {
                        name: "Status",
                        field: "isActive",
                        render: (row: any) => {
                            return (
                                <div
                                    className={clsx([
                                        "flex items-center",
                                        {"text-green-600": row.isActive},
                                        {"text-red-600": !row.isActive}
                                    ])}
                                >
                                    {row.isActive ? "Active" : "Inactive"}
                                </div>
                            );
                        }
                    },
                    {
                        name: "registered",
                        field: "createdAt",
                        render: (row: any) => {
                            return (
                                <div>{formatReadableDate(row.createdAt)}</div>
                            )
                        }
                    },
                    {
                        name: "action",
                        field: "action",
                        render: (row: any) => {
                            return (
                                <div>
                                    <ViewButton url={`/users/${row.id}`}/>
                                </div>
                            )
                        }
                    }
                ]} rows={data && data.length > 0 ? data : []}/>

            <CreateUser open={showCreate} onClose={() => {
                void fetchData(fetchUrl);
                void setShowCreate(false);
            }}/>

        </div>
    );
};

export default OperationUsers;