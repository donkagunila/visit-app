import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import FormModal from "../../../../base/forms/FormModal";
import * as yup from "yup";
import usePostData from "../../../../../hooks/usePostData.ts";
import {useEffect, useState} from "react";

interface Props {
    open: boolean;
    saleId: string;
    onClose: () => void;
}

const EditSaleDetailsPan = ({open, saleId, onClose}: Props) => {

    const [batchOptions, setBatchOptions] = useState<any[]>([]);
    const [customerOptions, setCustomerOptions] = useState<any[]>([]);

    const fetchUrl: string = `/sales/sale/${saleId}`;
    const {
        data, error, loading
    } = useDataFetch<any>({
        type: "detail",
        id: saleId,
        url: fetchUrl,
        api: Constants.API_URLS.DEFAULT
    })

    if (!loading && error) {
        const errorMessage = "Error " + error;
        toast.error(errorMessage, {
            toastId: "ERROR_FETCHING_DATA"
        })
    }


    const {updateData} = usePostData({
        actionTitle: "Log Sale",
        onSuccessText: "Sale Logged Successfully",
        onErrorText: "Error Logging Sales",
        api: Constants.API_URLS.DEFAULT,
    })


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


    const handleLogSale = async (data: any) => {

        const payload = {
            ...data,
            stockId: data.batchId.value,
            customerId: data.name.value
        }

        await updateData(`/sales/${saleId}`, payload).then((res) => {
            if (res.data) {
                onClose && onClose();
            }
        }).finally(() => {
            onClose && onClose();
        });
    }

    return (

        <div>
            {data && (

                <FormModal
                    open={open}
                    title="Update Sale Entry"
                    inputs={[
                        {
                            name: "batchId",
                            label: "Batch",
                            type: "select",
                            options: batchOptions,
                            placeholder: "Select Batch",
                            // value: "",
                            defaultValue: data.stock?.id
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
                            value: "",
                            defaultValue: data.quantity
                        },
                        {
                            name: "amount",
                            label: "Amount (Tzs)",
                            type: "number",
                            placeholder: "Enter Sales Price per Item",
                            value: "",
                            defaultValue: data.amount
                        },
                        {
                            name: "remarks",
                            label: "Remarks",
                            type: "textarea",
                            placeholder: "Why is this being updated?",
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
                        onClose()
                    }} onSubmit={(data: any) => {
                    void handleLogSale(data)
                }}/>
            )}
        </div>
    );
};

export default EditSaleDetailsPan;