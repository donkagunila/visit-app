import { twMerge } from "tailwind-merge";
import { createContext, useContext } from "react";

interface TableProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<"table"> {
  dark?: boolean;
  bordered?: boolean;
  hover?: boolean;
  striped?: boolean;
  sm?: boolean;
}

const tableContext = createContext<{
  dark: TableProps["dark"];
  bordered: TableProps["bordered"];
  hover: TableProps["hover"];
  striped: TableProps["striped"];
  sm: TableProps["sm"];
}>({
  dark: false,
  bordered: false,
  hover: false,
  striped: false,
  sm: false
});

const TableList = ({
  className,
  dark,
  bordered,
  hover,
  striped,
  sm,
  ...props
}: TableProps) => {
  return (
    <tableContext.Provider
      value={{
        dark: dark,
        bordered: bordered,
        hover: hover,
        striped: striped,
        sm: sm
      }}
    >
      <table
        className={twMerge([
          "w-full text-left",
          dark && "bg-dark text-white dark:bg-black/30",
          className
        ])}
        {...props}
      >
        {props.children}
      </table>
    </tableContext.Provider>
  );
};

// Table Header
interface TheadProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<"thead"> {
  variant?: "default" | "light" | "dark";
}

const theadContext = createContext<{
  variant: TheadProps["variant"];
}>({
  variant: "default"
});

export const TableThead = ({ className, ...props }: TheadProps) => {
  return (
    <theadContext.Provider
      value={{
        variant: props.variant
      }}
    >
      <thead
        className={twMerge([
          props.variant === "light" && "bg-slate-200/60 dark:bg-slate-200",
          props.variant === "dark" && "bg-dark text-white dark:bg-black/30",
          className
        ])}
        {...props}
      >
        {props.children}
      </thead>
    </theadContext.Provider>
  );
};

type TbodyProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"tbody">
>;

export const TableTbody = ({ className, ...props }: TbodyProps) => {
  return <tbody className={className}>{props.children}</tbody>;
};

type TrProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<"tr">;

export const TableTr = ({ className, ...props }: TrProps) => {
  const table = useContext(tableContext);
  return (
    <tr
      className={twMerge([
        table.hover &&
          "[&:hover_td]:bg-sleate-100 [&:hover_td]:dark:bg-darkmode-300 [&:hover_td]:dark:bg-opacity-50",
        table.striped &&
          "[&:nth-of-type(odd)_td]:bg-slate-100/[0.6] [&:nth-of-type(odd)_td]:dark:bg-darkmode-300 [&:nth-of-type(odd)_td]:dark:bg-opacity-50",
        className
      ])}
      {...props}
    >
      {props.children}
    </tr>
  );
};

type ThProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<"th">;
export const TableTh = ({ className, ...props }: ThProps) => {
  const table = useContext(tableContext);
  const thead = useContext(theadContext);
  return (
    <th
      className={twMerge([
        "text-left text-xs font-bold bg-gray-100 text-gray-600 uppercase tracking-wider antialiased px-5 py-3 dark:border-darkmode-300",
        thead.variant === "light" && "border-b-0 text-teal-700",
        thead.variant === "dark" && "border-b-0",
        table.dark && "border-slate-600 dark:border-darkmode-300 text-white",
        table.bordered && "border-l border-r border-t",
        table.sm && "px-4 py-2",
        className
      ])}
      {...props}
    >
      {props.children}
    </th>
  );
};

type TdProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<"td">;
export const TableTd = ({ className, ...props }: TdProps) => {
  const table = useContext(tableContext);
  return (
    <td
      className={twMerge([
        "px-4 py-3 text-sm dark:border-darkmode-300",
        table.dark && "border-slate-100 dark:border-darkmode-300",
        table.bordered && "border-l border-r border-t",
        table.sm && "px-4 py-2",
        className
      ])}
      {...props}
    >
      {props.children}
    </td>
  );
};

export default TableList;
