import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";


const SettingsPage = () => {

    return (
        <MainLayout title="System Settings">


            <Tabbed tabs={[
                {
                    title: "General Settings",
                    icon: "LayoutGrid",
                    content: <div>app settings</div>
                },
                {
                    title: "Notification Settings",
                    icon: "Bell",
                    content: <div>Notification settings</div>
                },
                {
                    title: "Integration Settings",
                    icon: "Workflow",
                    content: <div>Notification settings</div>
                },
                {
                    title: "Backup & Recovery",
                    icon: "DatabaseBackup",
                    content: <div>Notification settings</div>
                }
            ]}/>

        </MainLayout>
    );
}

export default SettingsPage