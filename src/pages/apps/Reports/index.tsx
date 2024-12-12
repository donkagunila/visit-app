import PageHeader from "../../../components/base/PageHeader";
import Tabbed from "../../../components/Headless/Tabbed";
import ProductionReport from "../../../components/domains/apps/Reports/ProductionReport";

const ReportsPage = () => {
    return (
        <div>

            <PageHeader title={"Reports"} className={"bg-white px-4 border-b border-slate-100"}/>
            <Tabbed tabs={[
                {
                    title: "Application Reports",
                    icon: "LayoutDashboard",
                    content: (<div><ProductionReport/></div>)
                },
                {
                    title: "Transaction Reports",
                    icon: "FileBarChart2",
                    content: (<div><ProductionReport/></div>)
                },

            ]}/>


        </div>
    );
}

export default ReportsPage