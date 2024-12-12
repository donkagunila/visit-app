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
import Avatar from "react-avatar";


const schema = yup.object({
    username: yup.string().required().label("Username"),
    fullName: yup.string().required().label("Full Name"),
    role: yup.mixed().required().label("Role"),
    phoneNumber: yup.string().required().label("Phone Number"),
    emailAddress: yup.string().required().label("Email Address"),
})

interface Props {
    userId: string
}

const UserGeneralDetails = ({userId}: Props) => {

    console.log(userId)

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

    const handleUpdate = async (data: any) => {
        console.log(data)
        const payload = {
            ...data,
            role: data.role.value
        }
        await updateData(postUrl, payload).finally(() => {
            void fetchData(fetchUrl);
        })

    }

    const roleOptions = [
        {
            label: "Operational",
            value: "OPERATION"
        },
        {
            label: "Administrator",
            value: "ADMINISTRATION"
        }
    ]
    return (
        <div className="p-4 md:mx-32 md:my-3 h-[calc(100vh-180px)] overflow-y-auto">
            <div className="border-b border-slate-200 py-3 px-2">
                <div className="text-slate-600">User General Details</div>
                <div className="text-slate-400 text-xs">View user details and update</div>
            </div>

            {data && (

                <form onSubmit={handleSubmit(handleUpdate)}>

                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">User Avatar</div>
                                <div className="text-slate-400 text-xs">User Display Image</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2 flex flex-col">
                                    <FormLabel>Avatar</FormLabel>
                                    <Avatar
                                        round
                                        size="100"
                                        textSizeRatio={2.75}
                                        name={data.username}/>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">Primary Details</div>
                                <div className="text-slate-400 text-xs">User Personal Details</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormInput className="shadow-sm" type="text" {...register('fullName')}
                                               placeholder="Enter Full Name"
                                               defaultValue={data.fullName}/>
                                    {errors && errors.fullName && (
                                        <div className="text-red-500 text-xs">
                                            {errors.fullName.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <FormLabel>Username</FormLabel>
                                    <FormInput className="shadow-sm" type="text" {...register('username')}
                                               placeholder="Enter Username"
                                               defaultValue={data.username}/>
                                    {errors && errors.username && (
                                        <div className="text-red-500 text-xs">
                                            {errors.username.message}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">Contact Details</div>
                                <div className="text-slate-400 text-xs">Personal Contact Details</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormInput
                                        className="shadow-sm"
                                        {...register('phoneNumber')}
                                        type="text"
                                        placeholder="Enter Full Name"
                                        defaultValue={data.phoneNumber}/>
                                    {errors && errors.phoneNumber && (
                                        <div className="text-red-500 text-xs">
                                            {errors.phoneNumber.message}
                                        </div>
                                    )}
                                </div>


                                <div className="mb-3">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormInput className="shadow-sm" type="text" placeholder="Enter Email Address"
                                               defaultValue={data.emailAddress} {...register('emailAddress')}/>

                                    {errors && errors.emailAddress && (
                                        <div className="text-red-500 text-xs">
                                            {errors.emailAddress.message}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 border-b border-dashed mt-2 pb-2 border-slate-200 ">
                        <div className="col-span-12 md:col-span-4">
                            <div className="py-3 px-2">
                                <div className="text-slate-600">Profile Details</div>
                                <div className="text-slate-400 text-xs">Role Profile Details</div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="py-3 px-2">
                                <div className="mb-2">
                                    <FormLabel>Role</FormLabel>

                                    <Select
                                        styles={customStyles}
                                        onChange={(value: any) => {
                                            setValue('role', value)
                                        }}
                                        defaultValue={
                                            roleOptions.filter(option =>
                                                option.value === data.role)
                                        }
                                        options={roleOptions}/>

                                    {errors && errors.role && (
                                        <div className="text-red-500 text-xs">
                                            {errors.role.message}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="my-3 flex justify-end">
                        <Button type="submit" variant="primary"
                                className="px-3 py-3 flex gap-2 items-center cursor-pointer">
                            <Lucide icon="Pencil" className="h-4 w-4"/>Update Details</Button>
                    </div>
                </form>
            )}


        </div>
    );
};

export default UserGeneralDetails;