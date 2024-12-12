import {HttpClient} from "../utils/httpClient.ts";
import {setAuthDetails} from "../stores/authSlice.ts";
import {store} from "../stores/store.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface LoginDetails {
    email: string,
    password: string
}

interface AuthResults {
    authError?: string,
    userLogin: (data: LoginDetails) => Promise<void>,
    userLogout: () => Promise<void>,
    cleanUserData: () => Promise<void>,
}

const useAuth = (): AuthResults => {

    const [authError, setAuthError] = useState<string>()

    const navigate = useNavigate();


    const userLogin = async (data: LoginDetails): Promise<void> => {
        await HttpClient().post("/auth/login", data).then((res) => {
            if (res.data) {
                console.log(res.data?.data)
                store.dispatch(setAuthDetails(res.data.data));
            } else {
                setAuthError("Internal Server Error, please try again")
            }
        }).catch(error => {
            setAuthError(error.response?.data?.error)
        })
    }

    const userLogout = async (): Promise<void> => {
        // store.dispatch(removeAuthDetails())
        await cleanUserData();
    }


    const cleanUserData = async (): Promise<void> => {
        localStorage.removeItem("FARMUSER")
        setTimeout(() => {
            navigate("/auth/login");
        }, 100)
    }


    return {
        authError, userLogin, userLogout, cleanUserData
    }
};

export default useAuth;