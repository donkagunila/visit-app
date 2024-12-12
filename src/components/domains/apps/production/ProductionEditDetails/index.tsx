import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import FormModal from "../../../../base/forms/FormModal";
import * as yup from "yup";
import {useEffect, useState} from "react";
import usePostData from "../../../../../hooks/usePostData.ts";

interface Props {
    open: boolean;
    productionId: string;
    onClose: () => void;
}

const ProductionEditPage = ({open, productionId, onClose}: Props) => {

    const [batchOptions, setBatchOptions] = useState<any[]>([]);


    const fetchUrl: string = `/collections/collection/${productionId}`;
    const {
        data, error, loading, fetchData
    } = useDataFetch<any>({
        type: "detail",
        id: productionId,
        url: fetchUrl,
        api: Constants.API_URLS.DEFAULT
    })

    console.log(data);


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

    }, [stocks])

    const {updateData} = usePostData({
        actionTitle: "Log Collection",
        onSuccessText: "Collection Updated Successfully",
        onErrorText: "Error Logging collection",
        api: Constants.API_URLS.DEFAULT,
    })

    const handleLogCollection = async (data: any) => {
        const payload = {
            ...data,
            productionId,
            stockId: data.batchId.value
        }

        await updateData(`/collections/${productionId}`, payload).then(() => {
            void fetchData(fetchUrl);
        }).finally(() => {
            void fetchData(fetchUrl);
            onClose && onClose()
        });
    }


    return (
        <div>

            {data && (

                <FormModal
                    open={open}
                    title="Update Log Entry"
                    subTitle="Fill Below fields to update"
                    inputs={[
                        {
                            name: "batchId",
                            label: "Batch",
                            type: "select",
                            options: batchOptions,
                            placeholder: "Select Batch",
                            defaultValue: data?.stock?.id,
                            value: ""
                        },

                        {
                            name: "trays",
                            label: "Collected Trays",
                            type: "number",
                            placeholder: "How many trays did you collect?",
                            defaultValue: data?.trays,
                            value: ""
                        },
                        {
                            name: "eggs",
                            label: "Collected Eggs",
                            type: "number",
                            placeholder: "How many eggs did you collect?",
                            defaultValue: data?.eggs,
                            value: ""
                        },
                        {
                            name: "breakage",
                            label: "Breakage",
                            type: "number",
                            defaultValue: data?.breakage,
                            placeholder: "How many eggs broke?",
                            value: ""
                        },
                        {
                            name: "mortality",
                            label: "Mortality",
                            type: "number",
                            defaultValue: data?.trays,
                            placeholder: "How many chickens died?",
                            value: ""
                        },
                        {
                            name: "remarks",
                            label: "Comments",
                            type: "textarea",
                            placeholder: "Any comments or remarks?",
                            value: ""
                        }
                    ]}
                    schema={yup.object({
                        batchId: yup.mixed().required().label("Batch Type"),
                        trays: yup.number().required().min(0).label("Collected Trays"),
                        eggs: yup.number().required().min(0).label("Collected Eggs"),
                        breakage: yup.number().required().label("Breakage"),
                        mortality: yup.number().required().label("Mortality"),
                        remarks: yup.string().label("Remarks"),
                    })}
                    onClose={() => {
                        onClose && onClose()
                    }}
                    onSubmit={(data: any) => {
                        void handleLogCollection(data)
                    }}/>
            )}

        </div>
    );
};

export default ProductionEditPage;