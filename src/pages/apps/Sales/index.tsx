import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import FormModal from "../../../components/base/forms/FormModal";
import {useEffect, useState} from "react";
import usePostData from "../../../hooks/usePostData.ts";
import {Constants} from "../../../config/env.ts";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {toast} from "react-toastify";
import * as yup from "yup";
import {formatMoney} from "../../../utils/general.helpers.ts";
import {formatReadableDate} from "../../../utils/date.helper.ts";
import SaleDetailsPan from "../../../components/domains/apps/sales/SaleDetailsPan";
import {useLocation, useNavigate} from "react-router-dom";
import Avatar from "react-avatar";
import TableActionMenu from "../../../components/base/buttons/TableActionMenus";
import EditSaleDetailsPan from "../../../components/domains/apps/sales/EditSaleDetailsPan";


const SalesPage = () => {
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [batchOptions, setBatchOptions] = useState<any[]>([]);
    const [customerOptions, setCustomerOptions] = useState<any[]>([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const saleId = queryParams.get('saleId');
    const editSaleId = queryParams.get('editSaleId');


    const navigate = useNavigate();


    const fetchUrl: string = "/sales"

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

    const {
        data: stocks
    } = useDataFetch<any[]>({
        type: "main",
        url: '/stocks',
        api: Constants.API_URLS.DEFAULT
    })

    const {
        data: customers
    } = useDataFetch<any[]>({
        type: "main",
        url: '/customers',
        api: Constants.API_URLS.DEFAULT
    })

    useEffect(() => {

        if (stocks) {
            const stockOpts = stocks.map((stock) => {
                return {
                    label: stock.batchName,
                    value: stock.id
                }
            })

            setBatchOptions(stockOpts);
        }

        if (customers) {
            const opts = customers.map((customer) => {
                return {
                    label: customer.name,
                    value: customer.id
                }
            })

            setCustomerOptions(opts);
        }

    }, [stocks, customers])


    const {postData} = usePostData({
        actionTitle: "Log Sale",
        onSuccessText: "Sale Logged Successfully",
        onErrorText: "Error Logging Sales",
        api: Constants.API_URLS.DEFAULT,
    })

    const handleLogSale = async (data: any) => {

        const payload = {
            ...data,
            stockId: data.batchId.value,
            customerId: data.name.value
        }

        await postData(fetchUrl, payload).then((res) => {
            if (res.data) {
                void fetchData(fetchUrl);
            }
        }).finally(() => {
            setShowCreate(false)
        });
    }


    return (
        <MainLayout title="Daily Sales">
            <div>
                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           createButtonLabel="Log Sale"
                           columns={[
                               {
                                   name: "Batch Name",
                                   field: "batch",
                                   render: (row: any) => {
                                       return (
                                           <div>{row.stock?.batchName}</div>
                                       )
                                   }
                               },
                               {
                                   name: "Customer Name",
                                   field: "name",
                                   render: (row: any) => {
                                       return (
                                           <div className="capitalize flex items-center gap-2">
                                               <div>
                                                   <Avatar size="30" round name={row.customer?.name ?? "Guest"}/>
                                               </div>
                                               {row.customer?.name ?? "Guest"}</div>
                                       )
                                   }
                               },
                               {
                                   name: "Trays",
                                   field: "quantity"
                               },

                               {
                                   name: "Price Per Tray (Tzs)",
                                   field: "amount",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {formatMoney(Number(row.amount))}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Total Price (Tzs)",
                                   field: "total",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {formatMoney(Number(row.total))}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Sale Date",
                                   field: "createdAt",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {
                                                   formatReadableDate(row.createdAt)
                                               }
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "action",
                                   field: "action",
                                   render: (row: any) => {
                                       return (
                                           <div className="flex gap-2 items-center">
                                               <TableActionMenu
                                                   viewUrl={`/sales?saleId=${row.id}`}
                                                   editUrl={`/sales?editSaleId=${row.id}`}/>

                                               {/*<TableButton*/}
                                               {/*    url={`/sales?saleId=${row.id}`}*/}
                                               {/*    title="View"*/}
                                               {/*    type="view"*/}
                                               {/*/>*/}
                                               {/*<TableButton*/}
                                               {/*    url={`/sales?saleId=${row.id}`}*/}
                                               {/*    title="Edit"*/}
                                               {/*    type="edit"*/}
                                               {/*/>*/}
                                               {/*<TableButton*/}
                                               {/*    url={`/sales?saleId=${row.id}`}*/}
                                               {/*    title="Delete"*/}
                                               {/*    type="delete"*/}
                                               {/*/>*/}
                                               {/*<ViewButton url={`/sales?saleId=${row.id}`}/>*/}
                                           </div>
                                       )
                                   }
                               }

                           ]}
                           rows={data && data.length > 0 ? data : []} loading={loading}/>
            </div>

            <FormModal
                open={showCreate}
                title="Log Sale"
                inputs={[
                    {
                        name: "batchId",
                        label: "Batch",
                        type: "select",
                        options: batchOptions,
                        placeholder: "Select Batch",
                        value: ""
                    },
                    {
                        name: "name",
                        label: "Customer Name",
                        type: "select",
                        options: customerOptions,
                        placeholder: "Select Customer Name",
                        value: ""
                    },
                    {
                        name: "quantity",
                        label: "Tray Quantity",
                        type: "number",
                        placeholder: "Enter Number of trays sold",
                        value: ""
                    },
                    {
                        name: "amount",
                        label: "Amount (Tzs)",
                        type: "number",
                        placeholder: "Enter Sales Price per Item",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Remarks",
                        type: "textarea",
                        placeholder: "Brief comments or remark on the sale",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    batchId: yup.mixed().required().label("Batch Name"),
                    name: yup.mixed().required().label("Customer Name"),
                    amount: yup.number().required().label("Amount"),
                    quantity: yup.number().required().label("Quantity"),
                    remarks: yup.string().required().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }} onSubmit={(data: any) => {
                void handleLogSale(data)
            }}/>

            {saleId && typeof saleId == 'string' && (
                <SaleDetailsPan open={!!saleId} saleId={saleId} onClose={() => navigate('/sales')}/>
            )}

            {editSaleId && typeof editSaleId == 'string' && (
                <EditSaleDetailsPan open={!!editSaleId} saleId={editSaleId} onClose={() => navigate('/sales')}/>
            )}

        </MainLayout>
    );
}

export default SalesPage