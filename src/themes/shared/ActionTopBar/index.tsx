import Menu, {MenuButton, MenuHeader, MenuItem, MenuItems} from "../../../components/Headless/Menu";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../stores/hooks.ts";
import {getUserAuthDetails} from "../../../stores/authSlice.ts";
import Avatar from "react-avatar";

const ActionTopBar = () => {

    const navigate = useNavigate();
    const authDetails = useAppSelector(getUserAuthDetails);

    // const auth = useAuth();

    const handleLogout = async () => {
        try {

            localStorage.removeItem("FARMUSER");
            // store.dispatch(removeAuthDetails());
            navigate("/auth/login");
            // store.dispatch(removeAuthDetails());
            // await auth.userLogout().then(() => {
            // navigate("/auth/login");
            // });

        } catch (e) {
            toast.error("Error Occurred, try again");
        }
    }


    return (
        <nav className="bg-white border-b border-slate-200/50">
            <div className=" px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute bg-transparent inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        <div className="relative ml-2">

                            {authDetails && (
                                <Menu className="p-0 m-0">
                                    <MenuButton>

                                        <div className="flex items-center gap-2">
                                            <Avatar size="40" round name="Donald"
                                                    textSizeRatio={2.4}/>
                                            <div
                                                className="text-sm capitalize text-slate-600 flex flex-col items-start">
                                                <div>
                                                    {authDetails.fullName}
                                                </div>
                                                <div
                                                    className="text-[0.65rem] text-slate-400 -mt-0.5">{authDetails.role}</div>
                                            </div>
                                        </div>

                                    </MenuButton>

                                    <MenuItems className="w-[200px] text-slate-500 p-0">

                                        <MenuHeader className="p-0">
                                            <div className="bg-primary px-4 py-5 rounded-t-md">
                                                <div className="text-white">
                                                    <div className="text-sm capitalize">{authDetails.fullName}</div>
                                                    <div
                                                        className="text-xs mb-2 text-slate-100">@{authDetails.username}</div>
                                                    <div className="text-xs">Role: {authDetails.role}</div>
                                                </div>
                                            </div>
                                        </MenuHeader>

                                        <MenuItem>
                                            <div
                                                className="flex flex-grow py-2 px-2 hover:bg-red-500 hover:text-white transition duration-300 rounded-md"
                                                onClick={handleLogout}>
                                                Logout
                                            </div>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    )
}
export default ActionTopBar