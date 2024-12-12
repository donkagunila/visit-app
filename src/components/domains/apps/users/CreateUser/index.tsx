import FormModal from "../../../../base/forms/FormModal";
import * as yup from "yup";
import usePostData from "../../../../../hooks/usePostData.ts";
import {Constants} from "../../../../../config/env.ts";

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateUser = ({open, onClose}: Props) => {

    const postUrl: string = "/users"


    const {
        postData
    } = usePostData({
        actionTitle: "Create Customer",
        onSuccessText: "User Created Successfully",
        onErrorText: "Error Creating Customer",
        api: Constants.API_URLS.DEFAULT,
    })


    const handleCreateUser = async (data: any) => {
        const payload = {
            ...data,
            role: data.role.value
        }
        await postData(postUrl, payload).finally(() => {
            onClose && onClose();
        });
    }

    return (
        <FormModal
            open={open}
            title={"Create User"}
            inputs={[
                {
                    name: "username",
                    label: "Username",
                    type: "text",
                    placeholder: "Enter Username",
                    value: ""
                },
                {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter Full Name",
                    value: ""
                },
                {
                    name: "phoneNumber",
                    label: "Phone Number",
                    type: "text",
                    placeholder: "Enter Phone number",
                    value: ""
                },
                {
                    name: "emailAddress",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter Email Address",
                    value: ""
                },
                {
                    name: "role",
                    label: "Role",
                    type: "select",
                    options: [
                        {
                            label: "Operational",
                            value: "OPERATION"
                        },
                        {
                            label: "Administrator",
                            value: "ADMINISTRATION"
                        }
                    ],
                    placeholder: "Select User Role",
                    value: ""
                },
                {
                    name: "password",
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                    value: ""
                },
            ]}
            schema={
                yup.object({
                    username: yup.string().required().label("Username"),
                    fullName: yup.string().required().label("Full Name"),
                    role: yup.mixed().required().label("Role"),
                    phoneNumber: yup.string().required().label("Phone Number"),
                    emailAddress: yup.string().required().label("Email Address"),
                })
            }
            onClose={() => {
                onClose && onClose()
            }}
            onSubmit={(data: any) => {
                void handleCreateUser(data)
            }}
        />
    );
};

export default CreateUser;