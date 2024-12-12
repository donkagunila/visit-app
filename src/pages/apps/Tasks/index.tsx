import MainLayout from "../../../components/layouts/MainLayout";
import Tabbed from "../../../components/Headless/Tabbed";


const TasksPage = () => {

    return (
        <MainLayout title="Tasks & activities">


            <Tabbed tabs={[
                {
                    title: "All Tasks",
                    icon: "ClipboardList",
                    content: <div>app settings</div>
                },
                {
                    title: "Task Calendar",
                    icon: "Calendar",
                    content: <div>Notification settings</div>
                }
            ]}/>

        </MainLayout>
    );
}

export default TasksPage