import {Link, useParams} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import Lucide from "../../../components/base/Lucide";
import Tabbed from "../../../components/Headless/Tabbed";
import StockSalesDetails from "../../../components/domains/apps/Reports/Stocks/StockSalesDetails";
import StockExpenseDetails from "../../../components/domains/apps/Reports/Stocks/StockExpenseDetails";
import StockProductionDetails from "../../../components/domains/apps/Reports/Stocks/StockProductionDetails";


const StocksDetailsPage = () => {
    const {stockId} = useParams();


    return (
        <div>
            <div>
                <div className={twMerge(["bg-white p-2 "])}>
                    <div className="mx-3 my-2">
                        <div>
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="flex items-center text-xs text-slate-500 gap-2">
                                        <li>
                                            <div className="flex justify-center items-center gap-1">
                                                <Link
                                                    to={'/reports'}
                                                    className="text-slate-500 capitalize"
                                                >
                                                    Reports
                                                </Link>

                                                <Lucide
                                                    icon={"ChevronRight"}
                                                    className="h-3 w-3 text-slate-400"
                                                />

                                                <span>Stock Report</span>

                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-semibold">Stock Report Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {stockId && (
                <Tabbed tabs={[
                    {
                        title: "Production",
                        icon: "LayoutGrid",
                        content: <StockProductionDetails stockId={stockId}/>
                    },
                    {
                        title: "Expenses",
                        icon: "ShoppingBag",
                        content: <StockExpenseDetails stockId={stockId}/>
                    },
                    {
                        title: "Sales",
                        icon: "Blocks",
                        content: <StockSalesDetails stockId={stockId}/>
                    },
                ]}/>
            )}


        </div>
    );
}

export default StocksDetailsPage