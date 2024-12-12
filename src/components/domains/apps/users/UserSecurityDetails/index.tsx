import FormInput from "../../../../base/forms/inputs/FormInput";
import FormLabel from "../../../../base/forms/labels/FormLabel";
import useDataFetch from "../../../../../hooks/useDataFetch.ts";
import {Constants} from "../../../../../config/env.ts";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../base/buttons/Button";
import Lucide from "../../../../base/Lucide";
import Select from "react-select";
import {customStyles} from "../../../../../utils/form.helper.tsx";
import usePostData from "../../../../../hooks/usePostData.ts";


const schema = yup.object({
    password: yup.string().label("Password"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match').label("confirm password"),
    status: yup.mixed().label("Status"),
})

interface Props {
    userId: string
}

const UserSecurityDetails = ({userId}: Props) => {

    const fetchUrl: string = `/users/${userId}`

    const {
        data, error, loading, fetchData
    } = useDataFetch<any>({
        type: "detail",
        id: userId,
        url: fetchUrl,
        api: Constants.API_URLS.DEFAULT
    })

    if (!loading && error) {
        const errorMessage = "Error " + error;
        toast.error(errorMessage, {
            toastId: "ERROR_FETCHING_DATA"
        })
    }
    const statusOptions = [{
        label: "Active",
        value: true
    }, {
        label: "Inactive",
        value: false
    }];


    console.log(data);

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm({
        resolver: yupResolver(schema)
    });

    const {
        updateData
    } = usePostData({
        actionTitle: "Update User",
        onSuccessText: "User Updated Successfully",
        onErrorText: "Error Updating User ",
        api: Constants.API_URLS.DEFAULT,
    })

    const postUrl: string = `/users/${userId}`

    const handleUpdate = async (values: any) => {
        console.log(values)
        if (values.password || values.status) {


            let payload = {};

            if (values.password != "") {
                payload = {
                    ...payload,
                    password: values.password
                }
            }

            if (values.status) {
                payload = {
                    ...payload,
                    isActive: values.status.value
                }
            }

            await updateData(postUrl, payload).finally(() => {
                void fetchData(fetchUrl);
            })
        }
    }
    return (
        <div className="p-4 md:mx-32 md:my-3 h-[calc(100vh-180px)] overflow-y-auto">
            <div className="border-b border-slate-200 py-3 px-2">
                <div className="text-slate-600">User Security Details</div>
                <div className="text-slate-400 text-xs">Update user Security details</div>
            </div>

            {data && (

                <form onSubmit={handleSubmit(handleUpdate)}>


                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">Password Details</div>
                                <div className="text-slate-400 text-xs">User password Details</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2">
                                    <FormLabel>New Password</FormLabel>
                                    <FormInput className="shadow-sm" type="password" {...register('password')}
                                               placeholder="Enter New Password"
                                    />
                                    {errors && errors.password && (
                                        <div className="text-red-500 text-xs">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormInput className="shadow-sm" type="password" {...register('confirmPassword')}
                                               placeholder="Confirm new Password"
                                    />
                                    {errors && errors.confirmPassword && (
                                        <div className="text-red-500 text-xs">
                                            {errors.confirmPassword.message}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">User Status</div>
                                <div className="text-slate-400 text-xs">User Status</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2">
                                    <FormLabel>Status</FormLabel>

                                    <Select
                                        styles={customStyles}
                                        onChange={(value: any) => {
                                            setValue('status', value)
                                        }}
                                        defaultValue={
                                            statusOptions.filter(option =>
                                                option.value === data.isActive)
                                        }
                                        options={statusOptions}/>

                                    {errors && errors.status && (
                                        <div className="text-red-500 text-xs">
                                            {errors.status.message}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="my-3 flex justify-end">
                        <Button
                            type="submit"
                            variant="primary"
                            className="px-3 py-3 flex gap-2 items-center cursor-pointer"
                        >
                            <Lucide icon="Pencil" className="h-4 w-4"/>Update Details</Button>
                    </div>
                </form>
            )}


        </div>
    );
};

export default UserSecurityDetails;