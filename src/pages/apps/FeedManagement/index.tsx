import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";
import FeedTypesPage from "./FeedTypes";
import FeedStockPage from "./FeedStock";


const FeedManagementPage = () => {

    return (
        <MainLayout title="Farm Finances">
            <Tabbed
                tabs={
                    [
                        {
                            title: "Feed Stock",
                            icon: "PackageMinus",
                            content: <FeedStockPage/>
                        },
                        {
                            title: "Feed Types",
                            icon: "PackagePlus",
                            content: <FeedTypesPage/>
                        },
                    ]}/>

        </MainLayout>
    );
}

export default FeedManagementPage