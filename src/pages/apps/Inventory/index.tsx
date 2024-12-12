import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";
import FeedStock from "./FeedStock";


const InventoryPage = () => {

    return (
        <MainLayout title="Inventory Management">
            <Tabbed
                tabs={
                    [
                        {
                            title: "Production Stock",
                            icon: "Calendar",
                            content: <div><FeedStock/></div>
                        },
                        {
                            title: "Feed Stock",
                            icon: "ClipboardList",
                            content: <div><FeedStock/></div>
                        },
                        {
                            title: "Medicine Stock",
                            icon: "Calendar",
                            content: <div><FeedStock/></div>
                        },
                        {
                            title: "Other Resources",
                            icon: "Calendar",
                            content: <div><FeedStock/></div>
                        },
                        {
                            title: "Equipments",
                            icon: "Calendar",
                            content: <div><FeedStock/></div>
                        }
                    ]}/>

        </MainLayout>
    );
}

export default InventoryPage