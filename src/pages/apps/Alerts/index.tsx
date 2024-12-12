import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";


const AlertsPage = () => {

    return (
        <MainLayout title="Notifications & alerts">


            <Tabbed tabs={[
                {
                    title: "All Notifications",
                    icon: "ClipboardList",
                    content: <div>All Notifications</div>
                },
                {
                    title: "Reminders",
                    icon: "Calendar",
                    content: <div>Notification settings</div>
                }
            ]}/>

        </MainLayout>
    );
}

export default AlertsPage