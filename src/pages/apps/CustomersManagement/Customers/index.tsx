import {useState} from "react";

import {toast} from "react-toastify";
import * as yup from "yup";
import useDataFetch from "../../../../hooks/useDataFetch.ts";
import usePostData from "../../../../hooks/usePostData.ts";
import DataTable from "../../../../components/base/Table/DataTable";
import {formatReadableDate} from "../../../../utils/date.helper.ts";
import FormModal from "../../../../components/base/forms/FormModal";
import {Constants} from "../../../../config/env.ts";
import Avatar from "react-avatar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {formatMoney} from "../../../../utils/general.helpers.ts";
import ViewButton from "../../../../components/base/buttons/ViewButton";
import CustomerDetailsPan from "../../../../components/domains/apps/stakeholders/CustomerDetailsPan";

const CustomersPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);
    const fetchUrl: string = "/customers"

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const customerId = queryParams.get('customerId');


    const navigate = useNavigate();


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

    const {postData} = usePostData({
        actionTitle: "Create Customer",
        onSuccessText: "Customer Created Successfully",
        onErrorText: "Error Creating customer",
        api: Constants.API_URLS.DEFAULT,
    })


    const handleCreate = async (data: any) => {

        const payload = {
            ...data,
            type: data.type?.value
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
        <div>
            <div>

                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           loading={loading}
                           createButtonLabel="Create Customer"
                           columns={[
                               {
                                   name: "name",
                                   field: "name",
                                   render: (row: any) => {
                                       return (
                                           <div className="capitalize">
                                               <div className="flex gap-2 items-center">
                                                   <Avatar round size="30" name={row.name}/>
                                                   <div> {row.name}</div>
                                               </div>
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "type",
                                   field: "type",
                                   render: (row: any) => {
                                       return (
                                           <div className="capitalize">
                                               <div className="flex gap-2 items-center">
                                                   <div> {row.type ?? "-"}</div>
                                               </div>
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Phone Number",
                                   field: "phoneNumber",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               <div>{row.phoneNumber}</div>
                                               <div className="text-primary">
                                                   <Link
                                                       to={`mailto:${row.emailAddress}`}
                                                       target="_blank">{row.emailAddress}</Link>
                                               </div>
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Purchased Trays",
                                   field: "trays",
                                   render: (row: any) => {
                                       const totalTrays = row.sales.reduce((sum: number, sale: any) => sum + sale.quantity, 0);
                                       return (
                                           <div>{formatMoney(totalTrays, 0) || 0}</div>
                                       )
                                   }
                               },
                               {
                                   name: "Amount",
                                   field: "amount",
                                   render: (row: any) => {
                                       const totalAmount = row.sales.reduce((sum: number, sale: any) => sum + sale.total || 0, 0);
                                       return (
                                           <div>{(formatMoney(totalAmount) || 0)}</div>
                                       )
                                   }
                               },
                               {
                                   name: "Purchase Index",
                                   field: "purchases",
                                   render: (row: any) => {
                                       return (
                                           <div>{row.sales.length}</div>
                                       )
                                   }
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
                               }, {
                                   name: "Actions",
                                   field: "action",
                                   render: (row: any) => {
                                       return <div>
                                           <ViewButton url={`?customerId=${row.id}`}/>
                                       </div>
                                   }
                               }

                           ]}
                           rows={data && data.length > 0 ? data : []}/>
            </div>

            <FormModal
                open={showCreate}
                title="Create Customer"
                inputs={[
                    {
                        name: "name",
                        label: "Name",
                        type: "text",
                        placeholder: "Enter Customer's Name",
                        value: ""
                    },
                    {
                        name: "type",
                        label: "Type",
                        type: "select",
                        options: [
                            {
                                label: "Individual",
                                value: "Individual"
                            },
                            {
                                label: "Company",
                                value: "Company"
                            }
                        ],
                        placeholder: "Select Customer Type",
                        value: ""
                    },
                    {
                        name: "phoneNumber",
                        label: "Phone Number",
                        type: "text",
                        placeholder: "Enter Customer's Phone Number",
                        value: ""
                    },

                    {
                        name: "emailAddress",
                        label: "Email Address",
                        type: "text",
                        placeholder: "Enter Customer's Email Address",
                        value: ""
                    },
                    {
                        name: "address",
                        label: "Address",
                        type: "textarea",
                        placeholder: "Enter Customer's Address",
                        value: ""
                    },
                    {
                        name: "city",
                        label: "City",
                        type: "text",
                        placeholder: "Enter Customer's City",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Remarks",
                        type: "textarea",
                        placeholder: "Any Comment on the Customer?",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    name: yup.string().required().label("Customer Name"),
                    type: yup.mixed().label("Customer Type"),
                    phoneNumber: yup.string().required().label("Phone Number"),
                    emailAddress: yup.string().label("Email Address"),
                    address: yup.string().label("Address"),
                    city: yup.string().label("City"),
                    remarks: yup.string().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleCreate(data)
                }}/>


            {customerId && typeof customerId == 'string' && (
                <CustomerDetailsPan open={!!customerId} customerId={customerId}
                                    onClose={() => navigate('/customer-management')}/>
            )}


        </div>
    );
}

export default CustomersPage