import PageHeader from "../../../components/base/PageHeader";
import Tabbed from "../../../components/Headless/Tabbed";
import AdminUsers from "./admin-users.tsx";
import OperationUsers from "./operation-users.tsx";

const UsersPage = () => {
    return (
        <div>

            <PageHeader title={"System Users"} className={"bg-white px-4 border-b border-slate-100"}/>
            <Tabbed tabs={[
                {
                    title: "Operation Users",
                    icon: "Users",
                    content: (<div><OperationUsers/></div>)
                },
                {
                    title: "Admin Users",
                    icon: "UserRoundCog",
                    content: (<div><AdminUsers/></div>)
                },
            ]}/>


        </div>
    );
}

export default UsersPage