export interface FormProps {
    inputs: Input[];
    onNValueSelected?: (
        parentName: string,
        childName: string,
        value: any,
    ) => {
        value: string | number;
        label: string;
    }[];
    onInputChange?: (name: string, value: any) => void;
    onFileChange?: (name: string, file: File) => void;
    onSubmit?: (values: { [key: string]: any }) => void;
}

export interface Input {
    name: string;
    label: string;
    value?: string | number | File | undefined;
    required?: boolean;
    disabled?: boolean;
    isMulti?: boolean;
    placeholder?: string;
    autocomplete?: string;
    inputs?: Input[];
    defaultValue?: string | number | object;
    default?: string | number;
    min?: number;
    max?: number;
    options?: {
        value: string | number;
        label: string;
    }[];
    type:
        | "number"
        | "text"
        | "date"
        | "email"
        | "password"
        | "phone"
        | "textarea"
        | "file"
        | "amount"
        | "select"
        | "radio"
        | "checkbox"
        | "nSelect"
        | "cSelect";
}
