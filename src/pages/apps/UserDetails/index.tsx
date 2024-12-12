import Tabbed from "../../../components/Headless/Tabbed";
import UserGeneralDetails from "../../../components/domains/apps/users/UserGeneralDetails";
import {Link, useParams} from 'react-router-dom';
import {twMerge} from "tailwind-merge";
import Lucide from "../../../components/base/Lucide";
import UserSecurityDetails from "../../../components/domains/apps/users/UserSecurityDetails";
import UserActivityLogs from "../../../components/domains/apps/users/UserActivityLogs";


const UserDetailsPage = () => {

    const {id} = useParams();

    return (
        <div>
            <div>
                <div className={twMerge(["bg-white p-2 "])}>
                    <div className="mx-3 my-2">
                        <div>
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="flex items-center text-xs text-slate-500 gap-2">
                                        <li>
                                            <div className="flex justify-center items-center gap-1">
                                                <Link
                                                    to={'/users'}
                                                    className="text-slate-500 capitalize"
                                                >
                                                    Users
                                                </Link>

                                                <Lucide
                                                    icon={"ChevronRight"}
                                                    className="h-3 w-3 text-slate-400"
                                                />

                                                <span>User Details</span>

                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-semibold">User Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {id && (
                <Tabbed tabs={[
                    {
                        title: "General",
                        icon: "LayoutGrid",
                        content: <UserGeneralDetails userId={id}/>
                    },
                    {
                        title: "Activities",
                        icon: "Activity",
                        content: <UserActivityLogs userId={id}/>
                    },
                    {
                        title: "Security",
                        icon: "LockKeyhole",
                        content: <UserSecurityDetails userId={id}/>
                    },

                ]}/>
            )}

        </div>
    );
}

export default UserDetailsPage