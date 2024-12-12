import TableList, {TableTbody, TableTd, TableTh, TableThead, TableTr} from "./TableList";
import {ArrowLeftRight, CheckSquare} from "lucide-react";
import {EmptyIcon} from "../../icons/EmptyIcon";
import {Link} from "react-router-dom";

interface Props {
    rows: {
        [key: string]: string | number | React.ReactElement;
    }[];
    columns: {
        field: any;
        name: string;
        type?: string;
    }[];
    data?: any[];
    loading?: boolean;
    tableClassName?: string;
    hasStatus?: boolean;
}

const TableListContainer = (props: Props) => {
    const {
        rows,
        columns,
        loading: isLoading,
        tableClassName,
        hasStatus
    } = props;

    const loading = isLoading;
    return (
        <>
            <TableList
                striped
                hover
                className={tableClassName ?? "w-full"}
            >
                <TableThead>
                    <TableTr>
                        {columns.map((column, i) => (
                            <TableTh
                                key={i}
                                className="border-b-0 whitespace-nowrap uppercase"
                            >
                                {column.name}
                            </TableTh>
                        ))}
                        {hasStatus && (
                            <TableTh className="border-b-0 whitespace-nowrap uppercase">
                                Actions
                            </TableTh>
                        )}
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {!loading &&
                        rows.length > 0 &&
                        rows.map((row, i) => (
                            <TableTr key={i} className="intro-x">
                                {columns.map((column, index) => (
                                    <TableTd
                                        key={index}
                                        className="w-10 bg-white dark:bg-darkmode-600"
                                    >
                                        {row[column.field]}
                                    </TableTd>
                                ))}

                                {hasStatus && (
                                    <TableTd
                                        className="first:rounded-l-md last:rounded-r-md w-20 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                        <div className="flex items-center justify-center">
                                            <Link
                                                className="flex items-center mr-5 text-primary whitespace-nowrap"
                                                to={`/administration/configurations/menus/${row.id}`}
                                            >
                                                <CheckSquare className="w-4 h-4 mr-1"/>
                                                View Details
                                            </Link>

                                            <a
                                                className="flex items-center text-primary whitespace-nowrap"
                                                href="#"
                                                onClick={(event: React.MouseEvent) => {
                                                    event.preventDefault();
                                                }}
                                            >
                                                <ArrowLeftRight className="w-4 h-4 mr-1"/>
                                                Change Status
                                            </a>
                                        </div>
                                    </TableTd>
                                )}
                            </TableTr>
                        ))}

                    {!loading && rows.length === 0 && (
                        <tr>
                            <td className="text-center py-10" colSpan={columns.length}>
                                <div
                                    className="m-auto bg-teal-100 items-center text-center p-5 h-fit w-fit rounded-full">
                                    <EmptyIcon height={70} width={70}/>
                                </div>
                                <p className="text-sm text-gray-700 mt-3"> No records found</p>
                            </td>
                        </tr>
                    )}
                </TableTbody>
            </TableList>
        </>
    );
};

export default TableListContainer;
