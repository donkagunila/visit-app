import DataTable from "../../../../components/base/Table/DataTable";
import {useEffect, useState} from "react";
import FormModal from "../../../../components/base/forms/FormModal";
import useDataFetch from "../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../config/env.ts";
import usePostData from "../../../../hooks/usePostData.ts";
import {toast} from "react-toastify";
import * as yup from "yup";
import {formatReadableDate} from "../../../../utils/date.helper.ts";
import Lucide from "../../../../components/base/Lucide";


const FeedStockPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [options, setOptions] = useState<any[]>([]);


    const fetchUrl: string = "/feeds/feed-stock"


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
        actionTitle: "Log Feed Stock",
        onSuccessText: "Feed Stock logged successfully",
        onErrorText: "Error Logging Fees Stock",
        api: Constants.API_URLS.DEFAULT,
    })


    const {
        data: feedTypes
    } = useDataFetch<any[]>({
        type: "main",
        url: '/feeds/feed-types',
        api: Constants.API_URLS.DEFAULT
    })


    useEffect(() => {

        if (feedTypes) {
            const opts = feedTypes.map((feedType) => {
                return {
                    label: feedType.name,
                    value: feedType.id
                }
            })

            setOptions(opts);
        }

    }, [feedTypes])


    const handleCreate = async (data: any) => {

        const payload = {
            ...data,
            feedType: {
                id: data.type.value
            }
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
            <DataTable
                flat
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
                        name: "Feed Type",
                        field: "feedType",
                        render: (row: any) => {


                            return <div>{row.feedType?.name}</div>
                        }
                    },
                    {
                        name: "quantity",
                        field: "quantity"
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

            <FormModal
                open={showCreate}
                title="Log Stock Entry"
                inputs={[
                    {
                        name: "type",
                        label: "Feed Type",
                        type: "select",
                        options: options,
                        placeholder: "Select Feed Type",
                        value: ""
                    },
                    {
                        name: "name",
                        label: "Stock Name",
                        type: "text",
                        placeholder: "Enter Stock Name",
                        value: ""
                    },
                    {
                        name: "quantity",
                        label: "quantity",
                        type: "number",
                        placeholder: "Enter No of Items",
                        value: ""
                    },
                    {
                        name: "reorderLevel",
                        label: "reorder Level",
                        type: "number",
                        placeholder: "Enter Nutrition Contents of the Feed",
                        value: ""
                    }, {
                        name: "safetyStock",
                        label: "safety Stock",
                        type: "number",
                        placeholder: "No Of Items in Reserve",
                        value: "",
                    }, {
                        name: "storageLocation",
                        label: "storage Location",
                        type: "cSelect",
                        options: [{
                            label: "Store",
                            value: "Store"
                        }],
                        placeholder: "Where is it stored?",
                        value: "",
                        isMulti: false

                    }, {
                        name: "expiryDate",
                        label: "expiry Date",
                        type: "date",
                        placeholder: "When will this stock Expire",
                        value: ""
                    },
                    {
                        name: "description",
                        label: "Description",
                        type: "textarea",
                        placeholder: "Any comment?",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    name: yup.string().required().label("Stock Name"),
                    type: yup.mixed().required().label("Feed Type"),
                    quantity: yup.number().required().label("Quantity"),
                    reorderLevel: yup.number().label("Reorder Level"),
                    safetyStock: yup.number().label("Safety Stock"),
                    storageLocation: yup.mixed().label("storage Location"),
                    expiryDate: yup.string().required().label("expiry Date"),
                    description: yup.string().label("description"),
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

export default FeedStockPage