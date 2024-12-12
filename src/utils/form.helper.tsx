import {Controller} from "react-hook-form";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import "react-widgets/styles.css";

import DatePicker from "react-widgets/DatePicker";
import {Input} from "../components/base/forms/form.properties";
import FormInput from "../components/base/forms/inputs/FormInput";
import FormTextarea from "../components/base/forms/inputs/FormTextarea";

export const renderInput = (
    input: Input,
    register: any,
    control: any,
    handleFieldChange: (fieldName: string) => void,
    formOptions?: any[],
) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        handleFieldChange(input.name);
    };

    if (
        formOptions &&
        formOptions.find((obj) => obj.name === input.name) !== undefined
    ) {
        const inputOptions = formOptions.find((obj) => obj.name === input.name);
        input.options = inputOptions?.options;
    }

    switch (input.type) {
        case "date":
            return (
                <Controller
                    control={control}
                    name={input.name}
                    render={({field}) => (
                        <DatePicker
                            placeholder="m-dd-yyyy"
                            valueDisplayFormat={{dateStyle: "medium"}}
                            onChange={(value) => {
                                field.onChange(value);
                            }}
                        />
                    )}
                />
            );

        case "number":
            return (
                <FormInput
                    {...input}
                    type="number"
                    {...register(input.name)}
                    placeholder={input.placeholder}
                    min={input.min}
                    max={input.max}
                />
            );

        case "phone":
            return (
                <FormInput
                    {...input}
                    type="text"
                    {...register(input.name)}
                    placeholder={input.placeholder}
                    min={input.min}
                    max={input.max}
                    onChange={(event) => {
                        handleChange(event);
                    }}
                />
            );

        case "amount":
            return (
                <FormInput
                    {...input}
                    type="text"
                    placeholder={input.placeholder}
                    onChange={(event) => {
                        handleChange(event);
                        const inputValue = event.target.value.replace(/,/g, ""); // Remove existing commas
                        const isValidChange = /^[0-9,.]*$/.test(inputValue);
                        if (isValidChange) {
                            const parsedValue = Number(inputValue);
                            event.target.value = parsedValue.toLocaleString();
                        } else {
                            event.target.value = "0";
                        }
                    }}
                    {...register(input.name)}
                />
            );

        case "textarea":
            return (
                <FormTextarea
                    {...input}
                    rows={3}
                    className="form-control-textarea"
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    onChange={handleChange}
                />
            );

        case "select":
            return (
                <Controller
                    control={control}
                    defaultValue={input.defaultValue}
                    name={input.name}
                    render={({field}) => (
                        <Select
                            {...input}
                            styles={customStyles}
                            options={input.options?.map((option: any) => ({
                                value: option.value,
                                label: option.label,
                            }))}
                            {...field}
                        />
                    )}
                />
            );

        case "nSelect":
            return (
                <Controller
                    control={control}
                    defaultValue={input.defaultValue}
                    name={input.name}
                    render={({field}) => (
                        <Select
                            {...input}
                            isClearable
                            options={input.options?.map((option: any) => ({
                                value: option.value,
                                label: option.label,
                            }))}
                            isMulti={input.isMulti ?? true}
                            {...field}
                        />
                    )}
                />
            );

        case 'cSelect':
            return (
                <Controller
                    control={control}
                    defaultValue={input.defaultValue}
                    name={input.name}
                    render={({field}) => (
                        <CreatableSelect
                            {...input}
                            styles={customStyles}
                            isClearable
                            options={input.options?.map((option: any) => ({
                                value: option.value,
                                label: option.label,
                            }))}
                            isMulti={input.isMulti ?? true}
                            {...field}/>
                    )}
                />

            )

        default:
            return (
                <FormInput
                    {...input}
                    type={input.type}
                    {...register(input.name)}
                    min={input.min}
                    max={input.max}
                    defaultValue={input.defaultValue}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                />
            );
    }
};

const classNames = "1px solid rgb(226 232 240 / 1)";

export const customStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        fontSize: "13px",
        backgroundColor: state.isSelected ? "#047857" : "white",
        "&:hover": {
            backgroundColor: "#047857",
            color: "white",
            cursor: "pointer",
        },
    }),

    control: (provided: any, state: any) => {
        const border =
            state.isFocused || state.isSelected ? classNames : "1px solid #f2f2f2";
        return {
            ...provided,
            border,
            fontSize: "13px",
            color: "#f2f2f2",
            "&:hover": {
                border: "1px solid #f2f2f2",
                boxShadow: "0 0 0 1px rgb(0 0 0 / 0.05)",
            },
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        };
    },
};
