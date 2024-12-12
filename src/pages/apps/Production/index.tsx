import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import FormModal from "../../../components/base/forms/FormModal";
import {useEffect, useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import usePostData from "../../../hooks/usePostData.ts";
import * as yup from "yup";
import {formatReadableDate} from "../../../utils/date.helper.ts";
import {formatMoney} from "../../../utils/general.helpers.ts";
import {twMerge} from "tailwind-merge";
import ProductionDetailsPan from "../../../components/domains/apps/production/ProductionDetailsPan";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Menu, {MenuButton, MenuItem, MenuItems} from "../../../components/Headless/Menu";
import Button from "../../../components/base/buttons/Button";
import Lucide from "../../../components/base/Lucide";
import ProductionEditPage from "../../../components/domains/apps/production/ProductionEditDetails";


const ProductionPage = () => {
    const [showCreate, setShowCreate] = useState<boolean>(false);

    const [batchOptions, setBatchOptions] = useState<any[]>([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const collectionId = queryParams.get('collectionId');
    const productionId = queryParams.get('productionId');


    const navigate = useNavigate();


    const fetchUrl: string = "/collections"
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


    const {postData} = usePostData({
        actionTitle: "Log Collection",
        onSuccessText: "Collection Logged Successfully",
        onErrorText: "Error Logging collection",
        api: Constants.API_URLS.DEFAULT,
    })

    const handleLogCollection = async (data: any) => {
        const payload = {
            ...data,
            stockId: data.batchId.value
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
        <MainLayout title="Daily Production">
            <div>
                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           createButtonLabel="Log Collection"
                           columns={[
                               {
                                   name: "Batch",
                                   field: "batches",
                                   render: (row: any) => {
                                       console.log(row)
                                       return <div> {row.stock?.batchName}</div>
                                   }
                               },
                               {
                                   name: "Trays",
                                   field: "trays"
                               },
                               {
                                   name: "Eggs",
                                   field: "eggs"
                               },
                               {
                                   name: "breakage",
                                   field: "breakage"
                               },
                               {
                                   name: "Total",
                                   field: "total"
                               },

                               {
                                   name: "Broke Percentage",
                                   field: "percentage",
                                   render: (row: any) => {
                                       const breakage = Number(row.breakage);
                                       let total = Number(row.total);
                                       if (total == 0) {
                                           total = (Number(row.trays) * 30) + Number(row.eggs) + Number(row.breakage)
                                       }
                                       // return <div>{breakage} - {total}</div>
                                       const percent = formatMoney((breakage / total) * 100)
                                       return (
                                           <div
                                               className={twMerge(
                                                   [
                                                       percent >= 80 && 'text-red-500',
                                                       percent >= 50 && 'text-amber-500',
                                                       percent < 10 && 'text-green-500'
                                                   ])}>{percent >= 0 ? Number(percent).toFixed(1) : 0.0} %</div>)
                                   }
                               },
                               {
                                   name: "Production Percentage",
                                   field: "percentag",
                                   render: (row: any) => {
                                       const totalStock = Number(row.stock.currentStock);
                                       let total = Number(row.total);
                                       if (total == 0) {
                                           total = (Number(row.trays) * 30) + Number(row.eggs) + Number(row.breakage)
                                       }
                                       // return <div>{breakage} - {total}</div>
                                       const percent = formatMoney((total / totalStock) * 100)
                                       return (
                                           <div
                                               className={twMerge(
                                                   [
                                                       percent >= 80 && 'text-green-500',
                                                       percent < 10 && 'text-amber-500'
                                                   ])}>{percent >= 0 ? Number(percent).toFixed(1) : 0.0} %</div>)
                                   }
                               },
                               {
                                   name: "Mortality",
                                   field: "mortality"
                               },
                               {
                                   name: "Date",
                                   field: "createdAt",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {formatReadableDate(row.createdAt)}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Actions",
                                   field: "actions",
                                   render: (row: any) => {
                                       return (
                                           <div className="flex">
                                               <div>
                                                   <Menu>
                                                       <MenuButton>
                                                           <Button variant="secondary"
                                                                   className="flex gap-2 items-center shadow-none border-none bg-slate-100 text-xs text-slate-400">
                                                               <span>Actions</span>
                                                               <span><Lucide icon="ChevronDown"
                                                                             className="h-4 w-4"/></span>
                                                           </Button>
                                                       </MenuButton>
                                                       <MenuItems className="w-[100px]">
                                                           <MenuItem className="flex">
                                                               <Link
                                                                   className="h-full w-full"
                                                                   to={`/production?collectionId=${row.id}`}>View</Link>
                                                           </MenuItem>
                                                           <MenuItem className="flex">
                                                               <Link
                                                                   className="h-full w-full"
                                                                   to={`/production?productionId=${row.id}`}>Edit</Link>
                                                           </MenuItem>
                                                       </MenuItems>
                                                   </Menu>
                                               </div>

                                               {/*<ViewButton url={`/production?collectionId=${row.id}`}/>*/}
                                           </div>
                                       )
                                   }
                               },
                           ]}
                           rows={data && data.length > 0 ? data : []} loading={loading}/>
            </div>

            <FormModal
                open={showCreate}
                title="Log Daily Collections"
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
                        name: "trays",
                        label: "Collected Trays",
                        type: "number",
                        placeholder: "How many trays did you collect?",
                        value: ""
                    },
                    {
                        name: "eggs",
                        label: "Collected Eggs",
                        type: "number",
                        placeholder: "How many eggs did you collect?",
                        value: ""
                    },
                    {
                        name: "breakage",
                        label: "Breakage",
                        type: "number",
                        placeholder: "How many eggs broke?",
                        value: ""
                    },
                    {
                        name: "mortality",
                        label: "Mortality",
                        type: "number",
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
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogCollection(data)
                }}/>


            {collectionId && typeof collectionId == 'string' && (
                <ProductionDetailsPan open={!!collectionId} collectionId={collectionId}
                                      onClose={() => navigate('/production')}/>
            )}

            {productionId && typeof productionId == 'string' && (
                <ProductionEditPage open={!!productionId} productionId={productionId}
                                    onClose={() => {
                                        void fetchData(fetchUrl);
                                        navigate('/production')
                                    }}/>
            )}

        </MainLayout>
    );
}

export default ProductionPage