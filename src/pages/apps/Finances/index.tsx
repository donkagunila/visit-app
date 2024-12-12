import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";
import ExpendituresPage from "../Expenditures";


const FinancePage = () => {

    return (
        <MainLayout title="Farm Finances">
            <Tabbed
                tabs={
                    [
                        {
                            title: "Farm Expenses",
                            icon: "PackageMinus",
                            content: <div>
                                <ExpendituresPage/>
                            </div>
                        },
                        // {
                        //     title: "Farm Income",
                        //     icon: "PackagePlus",
                        //     content: <div><IncomePage/></div>
                        // },
                    ]}/>

        </MainLayout>
    );
}

export default FinancePage