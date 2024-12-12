import {useAppDispatch, useAppSelector} from "../stores/hooks.ts";
import {getTheme, selectTheme, setTheme, themes, Themes} from "../stores/themeSlice.ts";
import {useEffect, useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {getUserAuthDetails} from "../stores/authSlice.ts";
import useAuth from "../hooks/useAuth.ts";


function MainTheme() {

    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const Component = getTheme(theme).component;

    const navigate = useNavigate();
    const authDetails = useAppSelector(getUserAuthDetails);
    const auth = useAuth();

    useEffect(() => {


        if (!authDetails) {
            console.log("MainPage :: User is Not Authenticated, Redirect to Login --")
            void auth.cleanUserData()
        }
    }, [auth, authDetails, navigate]);


    const {search} = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {

        const switchTheme = (theme: Themes["name"]) => {
            dispatch(setTheme(theme));
        };

        if (queryParams.get("theme")) {
            const selectedTheme = themes.find(
                (theme) => theme.name === queryParams.get("theme")
            );

            if (selectedTheme) {
                switchTheme(selectedTheme.name);
            }
        }
    }, [dispatch, queryParams]);


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {authDetails && (
                <Component/>
            )}

        </div>
    );
}

export default MainTheme;