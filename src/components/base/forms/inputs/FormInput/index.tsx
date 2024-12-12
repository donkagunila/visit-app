import React, { forwardRef, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { formInlineContext } from "../../FormInline";

interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  formInputSize?: "sm" | "lg";
  rounded?: boolean;
}

type FormInputRef = React.ComponentPropsWithRef<"input">["ref"];

const FormInput = forwardRef((props: FormInputProps, ref: FormInputRef) => {
  const { formInputSize, rounded, ...computedProps } = props;
  const formInline = useContext(formInlineContext);

  return (
    <input
      {...computedProps}
      value={undefined}
      autoComplete={"off"}
      ref={ref}
      className={twMerge([
        "disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent",
        "[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent",
        "text-sm border border-slate-600/20 w-full text-slate-500 rounded-md px-2 py-2 placeholder:text-slate-700/30 focus:ring-1 focus:ring-blue-200 focus:border-blue-200 focus:outline-none",
        props.formInputSize == "sm" && "text-xs py-1.5 px-2",
        props.formInputSize == "lg" && "text-lg py-1.5 px-4",
        props.rounded && "rounded-full",
        formInline && "flex-1",
        props.className,
      ])}
    />
  );
});

export default FormInput;
