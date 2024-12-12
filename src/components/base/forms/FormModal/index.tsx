import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Button from "../../buttons/Button";
import {Input} from "../form.properties";
import FormLabel from "../labels/FormLabel";
import Dialog, {DialogFooter, DialogPanel, DialogTitle} from "../../../Headless/Dialog";
import Lucide from "../../Lucide";
import {renderInput} from "../../../../utils/form.helper.tsx";

interface FormModalProps {
    open: boolean;
    title: string;
    submitLabel?: string;
    subTitle?: string;
    inputs: Input[];
    loading?: boolean;
    schema: any;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const FormModal = (props: FormModalProps) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(props.schema),
    });
    const handleChange = (e: any) => {
        console.log(e);
    };

    const errorObjects = Object.entries(errors);

    const handleClose = async () => {
        reset();
        props.onClose();
    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogPanel>
                    <DialogTitle className="border-none w-full ">
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <h3 className="text-lg font-medium  text-slate-600">
                                    {props.title ?? "Form Modal"}
                                </h3>
                                {props.subTitle && (
                                    <p className="text-xs text-slate-400 -mt-0.5">
                                        {props.subTitle}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Button variant="secondary-icon" onClick={handleClose}>
                                    <Lucide icon="X" className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                    </DialogTitle>

                    <form onSubmit={handleSubmit(props.onSubmit)}>
                        <div className="p-5">
                            {props.inputs?.map((input: Input, index: number) => (
                                <div key={index} className="mb-4">
                                    <FormLabel
                                        htmlFor={input.name}
                                        className="block font-normal text-sm text-slate-500 mb-1 capitalize">
                                        {input.label}
                                    </FormLabel>
                                    {renderInput(input, register, control, handleChange)}
                                    <div className="text-red-500 small-text lg:text-xs font-light mt-0.5">
                                        {errorObjects.map(([key, value]: any) => (
                                            <span key={key}>
                                                {key === input.name && <strong>{value.message}</strong>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <DialogFooter className="border-none w-full">
                            <div className="flex justify-end items-center py-3 gap-3">
                                <Button onClick={handleClose} type="reset" variant="secondary">
                                    Cancel
                                </Button>

                                <Button
                                    isLoading={props?.loading || isSubmitting}
                                    type="submit"
                                    variant="primary"
                                >
                                    {props.submitLabel ?? "Submit"}
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogPanel>
            </Dialog>
        </div>
    );
};

export default FormModal;
