import Button from "../../../components/base/buttons/Button";
import {useForm} from "react-hook-form";
import FormLabel from "../../../components/base/forms/labels/FormLabel";
import {useNavigate} from "react-router-dom";
import {getUserAuthDetails} from "../../../stores/authSlice.ts";
import {useAppSelector} from "../../../stores/hooks.ts";
import useAuth from "../../../hooks/useAuth.ts";
import {useEffect} from "react";
import FormInput from "../../../components/base/forms/inputs/FormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast} from "react-toastify";

const schema = yup.object({
    email: yup.string().required().label("Email Address"),
    password: yup.string().required().label("Password"),
});

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const authDetails = useAppSelector(getUserAuthDetails);

    const auth = useAuth();

    useEffect(() => {
        const user = localStorage.getItem("FARMUSER");
        if (authDetails && user) {
            if (authDetails.role == "ADMINISTRATION") {
                navigate("/admin/dashboards")
            } else {
                navigate("/admin")
            }
        }
    }, [authDetails, navigate]);

    const handleLogin = async (data: any) => {
        await auth.userLogin(data).catch((e: any) => {
            toast.error(e);
        })
    }

    return (
        <div className="flex justify-center items-center h-screen w-full bg-slate-100/20 border-t-4 border-primary">
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="border border-slate-200/60 rounded-lg p-5 min-w-[350px]  bg-white pb-12">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="text-center text-slate-600 mt-9 mb-4">
                            <div className="font-semibold text-xl mb-1">Sign In</div>
                            <p className="text-xs ext-slate-400">Welcome back, login to access the platform</p>
                        </div>

                        {auth.authError && (
                            <div
                                className="text-xs text-red-500 border border-red-600 bg-red-100/70 px-4 py-2 rounded-md min-w-[90%]">
                                {auth.authError}
                            </div>
                        )}
                        <div className="flex justify-center items-center flex-col w-full mt-5">

                            <div className="min-w-[90%] mb-2">
                                <FormLabel
                                    htmlFor="email"
                                    className="block font-normal text-sm text-slate-500 mb-1"
                                >
                                    Email
                                </FormLabel>

                                <FormInput type="text"
                                           autoFocus
                                           autoComplete="autocomplete"
                                           placeholder="Enter Email Address" {...register("email")} />

                                {errors && errors.email && (
                                    <div className="text-red-500 text-xs">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>

                            <div className="min-w-[90%] mb-2">
                                <FormLabel
                                    htmlFor="email"
                                    className="block font-normal text-sm text-slate-500 mb-1"
                                >
                                    Password
                                </FormLabel>

                                <FormInput type="password"
                                           placeholder="Enter Password ****" {...register("password")} />

                                {errors && errors.password && (
                                    <div className="text-red-500 text-xs">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <Button variant="primary" className="min-w-[90%] py-3" type="submit">Sign In</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;