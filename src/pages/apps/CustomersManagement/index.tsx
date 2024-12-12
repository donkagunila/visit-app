import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";
import SuppliersPage from "./Suppliers";
import CustomersPage from "./Customers";


const CustomerManagementPage = () => {

    return (
        <MainLayout title="Customers & Suppliers">
            <Tabbed
                tabs={
                    [
                        {
                            title: "Customers",
                            icon: "Users",
                            content: <div>
                                <CustomersPage/>
                            </div>
                        },
                        {
                            title: "Suppliers",
                            icon: "Container",
                            content: <div><SuppliersPage/></div>
                        },
                    ]}/>

        </MainLayout>
    );
}

export default CustomerManagementPage