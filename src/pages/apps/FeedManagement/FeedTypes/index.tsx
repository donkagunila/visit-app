import DataTable from "../../../../components/base/Table/DataTable";
import {useState} from "react";
import FormModal from "../../../../components/base/forms/FormModal";
import useDataFetch from "../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../config/env.ts";
import usePostData from "../../../../hooks/usePostData.ts";
import {toast} from "react-toastify";
import * as yup from "yup";
import {formatReadableDate} from "../../../../utils/date.helper.ts";
import Lucide from "../../../../components/base/Lucide";


const FeedTypesPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);


    const fetchUrl: string = "/feeds/feed-types"


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
        actionTitle: "Create Feed Type",
        onSuccessText: "Feed Type created successfully",
        onErrorText: "Error Creating Feed Type",
        api: Constants.API_URLS.DEFAULT,
    })


    const handleLogExpense = async (data: any) => {

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
                           createButtonLabel="Add Feed Type"
                           columns={[
                               {
                                   name: "Name",
                                   field: "name",
                               },
                               {
                                   name: "Nutrient Contents",
                                   field: "nutrientContent",
                               },
                               {
                                   name: "description",
                                   field: "description"
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
                title="Add Feed Type"
                inputs={[
                    {
                        name: "name",
                        label: "Feed Type Name",
                        type: "text",
                        placeholder: "Enter Feed Type NAme",
                        value: ""
                    },
                    {
                        name: "nutrientContent",
                        label: "Nutrient Content",
                        type: "textarea",
                        placeholder: "Enter Nutrition Contents of the Feed",
                        value: ""
                    },
                    {
                        name: "description",
                        label: "Description",
                        type: "textarea",
                        placeholder: "Expense Comments",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    name: yup.string().required().label("Feed Type Name"),
                    nutrientContent: yup.string().label("Nutrient Contents"),
                    description: yup.string().required().label("Description"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogExpense(data)
                }}/>
        </div>
    );
}

export default FeedTypesPage