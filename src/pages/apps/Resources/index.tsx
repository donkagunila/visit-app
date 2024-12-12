import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import {useEffect, useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import usePostData from "../../../hooks/usePostData.ts";
import FormModal from "../../../components/base/forms/FormModal";
import * as yup from "yup";
import clsx from "clsx";
import {formatMoney} from "../../../utils/general.helpers.ts";


const ResourcesPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [resourceOpts, setResourceOpts] = useState<any[]>([])

    const fetchUrl: string = "/resources"
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


    useEffect(() => {
        if (data && data.length > 0) {
            const opts = data.map((item) => {
                return {
                    value: item.name,
                    label: item.name
                }
            })

            setResourceOpts(opts);
        }
    }, [data])

    const {postData} = usePostData({
        actionTitle: "Create Resource",
        onSuccessText: "Resource Logged Successfully",
        onErrorText: "Error Logging Resource",
        api: Constants.API_URLS.DEFAULT,
    })

    const handleLogStock = async (data: any) => {

        const payload = {
            ...data,
            name: data.name.value,
            unitType: data.unitType.value,
            totalPrice: data.priceType.value == 'Full' ? data.unitPrice : (Number(data.unitPrice) * Number(data.units))
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
        <MainLayout title="Farm resources">
            <div>
                <DataTable
                    flat
                    showCreateButton
                    onCreateButtonClick={() => {
                        setShowCreate(true);
                    }}
                    createButtonLabel="Add Resource"
                    columns={[
                        {
                            name: "Resource Name",
                            field: "name",
                        },

                        {
                            name: "Start Units",
                            field: "units",
                        },
                        // {
                        //     name: "Available Units",
                        //     field: "availableUnits",
                        // },
                        {
                            name: "Unit Measure",
                            field: "unitType",
                        },
                        {
                            name: "Price Per Unit",
                            field: "unitPrice",
                            render: (row: any) => {
                                return <div>{formatMoney(row.unitPrice)}</div>
                            }
                        },
                        {
                            name: "Total Price",
                            field: "totalPrice",
                            render: (row: any) => {
                                return <div>{formatMoney(row.totalPrice)}</div>
                            }
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
                                        {row.isActive ? "Active" : "Inactive"}
                                    </div>
                                );
                            }
                        },
                        {
                            name: "action",
                            field: "action",
                            render: () => {
                                return (
                                    <div>
                                        {/*<ViewButton url={`/batches?stockid=${row.id}`}/>*/}
                                    </div>
                                )
                            }
                        }
                    ]}
                    rows={data && data.length > 0 ? data : []}
                    loading={loading}
                />
            </div>

            <FormModal
                open={showCreate}
                title="Add Farm Resource"
                inputs={[
                    {
                        name: "name",
                        label: "Resource Name",
                        type: "cSelect",
                        options: resourceOpts,
                        placeholder: "Select or type to add resource",
                        isMulti: false,
                        value: ""
                    },
                    {
                        name: "unitType",
                        label: "Measuring Unit",
                        type: "select",
                        options: [
                            {
                                label: "Kilogram (Kg)",
                                value: "Kg"
                            },
                            {
                                label: "Grams (g)",
                                value: "g"
                            },
                            {
                                label: "Liter (L)",
                                value: "L"
                            },
                            {
                                label: "Milliliters (mL)",
                                value: "mL"
                            },
                            {
                                label: "Carton (C)",
                                value: "C"
                            },
                            {
                                label: "Bag (B)",
                                value: "B"
                            }
                        ],
                        placeholder: "Select Unit Measure",
                        value: ""
                    },
                    {
                        name: "units",
                        label: "Units",
                        type: "number",
                        placeholder: "How many number of units?",
                        value: ""
                    },
                    {
                        name: "unitPrice",
                        label: "Price",
                        type: "number",
                        placeholder: "What is the price per Unit?",
                        value: ""
                    },
                    {
                        name: "priceType",
                        label: "Price Type",
                        type: "select",
                        options: [
                            {
                                label: "Price Per Item",
                                value: "item"
                            },
                            {
                                label: "Full Price",
                                value: "Full"
                            }
                        ],
                        placeholder: "Is This Full Price or Item Price?",
                        value: ""
                    },
                    {
                        name: "description",
                        label: "Description",
                        type: "textarea",
                        placeholder: "Write a brief description on the resource",
                        value: ""
                    },

                ]}
                schema={yup.object({
                    name: yup.mixed().required().label("Resource Name"),
                    unitType: yup.mixed().required().label("Unit Type"),
                    units: yup.number().required().min(1).max(99999999).label("Units"),
                    unitPrice: yup.number().required().min(1).max(99999999).label("Unit Price"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogStock(data)
                }}/>

            {/*{stockId && typeof stockId == 'string' && (*/}
            {/*    <StockDetailsPan open={!!stockId} stockId={stockId} onClose={handleCloseStockDetails}/>*/}
            {/*)}*/}
        </MainLayout>
    );
}

export default ResourcesPage