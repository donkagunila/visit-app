import {Outlet} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

const AuthLayout = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                limit={3}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;