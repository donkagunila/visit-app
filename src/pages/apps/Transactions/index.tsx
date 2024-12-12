import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import clsx from "clsx";
import ViewButton from "../../../components/base/buttons/ViewButton";
import {formatReadableDate} from "../../../utils/date.helper.ts";

const TransactionsPage = () => {

    return (
        <MainLayout title="Transactions">
            <div>
                <DataTable
                    flat
                    showCreateButton={false}
                    columns={[
                        {
                            name: "Order Id",
                            field: "refNumber",
                            render: (row: any) => {
                                return <div className="capitalize">{row.refNumber}</div>
                            }
                        },
                        {
                            name: "Quote Code",
                            field: "code",
                        },
                        {
                            name: "Agent",
                            field: "agent",
                        },
                        {
                            name: "Policy Holder",
                            field: "name",
                        },
                        {
                            name: "Price",
                            field: "price",
                        },
                        {
                            name: "Passport",
                            field: "passport",
                        },
                        {
                            name: "Policy Date",
                            field: "createdAt",
                            render: (row: any) => {
                                return (
                                    <div>{formatReadableDate(row.createdAt)}</div>
                                )
                            }
                        },
                        {
                            name: "Time (Weeks)",
                            field: "age",
                        },
                        {
                            name: "status",
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
                                        {row.isActive ? "Paid" : "Pending"}
                                    </div>
                                );
                            }
                        },
                        {
                            name: "action",
                            field: "action",
                            render: (row: any) => {
                                return (
                                    <div>
                                        <ViewButton url={`/batches?stockid=${row.id}`}/>
                                    </div>
                                )
                            }
                        }
                    ]}
                    rows={[
                        {
                            id: 23,
                            isActive: true,
                            age: 3,
                            createdAt: new Date(),
                            flight: "FNT-0091",
                            refNumber: "ZNZ-1212",
                            passport: 454597876,
                            name: "Donald Kagunila",
                            code: "131-121",
                            price: 145000,
                            agent: "AXa Insurance",
                            contact: "donkagunila@gmail.com"
                        }
                    ]}
                    loading={false}
                />
            </div>


        </MainLayout>
    );
}

export default TransactionsPage