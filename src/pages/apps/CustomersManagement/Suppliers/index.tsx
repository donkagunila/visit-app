import {useState} from "react";

import {toast} from "react-toastify";
import * as yup from "yup";
import useDataFetch from "../../../../hooks/useDataFetch.ts";
import usePostData from "../../../../hooks/usePostData.ts";
import DataTable from "../../../../components/base/Table/DataTable";
import {formatReadableDate} from "../../../../utils/date.helper.ts";
import FormModal from "../../../../components/base/forms/FormModal";
import {Constants} from "../../../../config/env.ts";
import Lucide from "../../../../components/base/Lucide";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";

const SuppliersPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);


    const fetchUrl: string = "/suppliers"


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
        actionTitle: "Create Supplier",
        onSuccessText: "Supplier Created Successfully",
        onErrorText: "Error Creating Supplier",
        api: Constants.API_URLS.DEFAULT,
    })

    const handleCreate = async (data: any) => {

        await postData(fetchUrl, data).then((res) => {
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
                           createButtonLabel="Create Supplier"
                           columns={[

                               {
                                   name: "Supplier",
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
                                   name: "Contact",
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
                                   name: "Address",
                                   field: "address"
                               },
                               {
                                   name: "Orders",
                                   field: "orders",
                                   render: () => {
                                       return <div>0</div>
                                   }
                               },
                               {
                                   name: "status",
                                   field: "isActive",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {row.isActive ? (
                                                       <div
                                                           className="flex items-center text-xs gap-1 text-green-600">
                                                           <Lucide icon="SquareCheckBig" className="h-3 w-3"/>
                                                           Active
                                                       </div>) :
                                                   <div
                                                       className="flex justify-center items-center text-xs gap-1 text-red-600">
                                                       <Lucide icon="SquareX" className="h-3 w-3"/>
                                                       InActive
                                                   </div>}
                                           </div>
                                       );
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
                               },

                           ]}
                           rows={data && data.length > 0 ? data : []}/>
            </div>

            <FormModal
                open={showCreate}
                title="Create Supplier"
                subTitle="Add Vendor/Supplier of farm services"
                inputs={[
                    {
                        name: "name",
                        label: "Name",
                        type: "text",
                        placeholder: "Enter Supplier's Name",
                        value: ""
                    },
                    {
                        name: "phoneNumber",
                        label: "Phone Number",
                        type: "text",
                        placeholder: "Enter Supplier's Phone Number",
                        value: ""
                    },

                    {
                        name: "emailAddress",
                        label: "Email Address",
                        type: "text",
                        placeholder: "Enter Supplier's Email Address",
                        value: ""
                    },
                    {
                        name: "leadTime",
                        label: "Lead Time(Days)",
                        type: "number",
                        placeholder: "No of days for orders to be delivered",
                        value: ""
                    },
                    {
                        name: "address",
                        label: "Address",
                        type: "textarea",
                        placeholder: "Enter Supplier's Address",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Remarks",
                        type: "textarea",
                        placeholder: "Any Comment on the supplier?",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    name: yup.string().required().label("Supplier Name"),
                    phoneNumber: yup.string().required().label("Phone Number"),
                    emailAddress: yup.string().label("Email Address"),
                    leadTime: yup.number().label("Lead Time"),
                    address: yup.string().label("Address"),
                    remarks: yup.string().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleCreate(data)
                }}/>
        </div>
    );
}

export default SuppliersPage