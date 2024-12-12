import PageHeader from "../../../components/base/PageHeader";
import usePushNotification from "../../../hooks/usePushNotification.hook.ts";

interface MainLayoutProps {
    title: string;
    children: React.ReactNode;
}


const MainLayout = ({title, children}: MainLayoutProps) => {

    usePushNotification()


    return (
        <div>
            <PageHeader title={title} className={"bg-white px-4 border-b border-slate-100"}/>
            <div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout