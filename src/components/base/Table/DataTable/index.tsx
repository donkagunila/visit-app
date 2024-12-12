import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {Props} from "./table.properties";
import Button from "../../buttons/Button";
import FormInput from "../../forms/inputs/FormInput";
import Menu from "../../headless/Menu";


import {exportToXlsx, onExportCsv} from "./table-exports";
import Lucide from "../../Lucide";
import {EmptyIcon} from "../../icons/EmptyIcon.tsx";
import {SpinnerIcon} from "../../icons/SpinnerIcon.tsx";

const DataTable = (props: Props) => {
    const {
        title,
        rows,
        data,
        columns,
        loading: isLoading,
        onRowClick,
        recordsPerPage = 10,
        showPagination: showPage,
        hasSelect,
        onRowSelect,
        pages,
        isRemote,
        prevPage,
        nextPage,
        page,
        flat,
        hideExportButton,
        showCreateButton,
        children
    } = props;
    const showPagination = showPage ?? true;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = pages || Math.ceil(rows.length / recordsPerPage);
    const [loading, setLoading] = useState(isLoading ?? false);
    const [searchQuery, setSearchQuery] = useState("");

    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    const toggleSorting = (columnName: any) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(columnName);
            setSortDirection("asc");
        }
    };

    const handleRowSelection = (rowIndex: number) => {
        // Function to handle the selection/deselection of rows.
        if (selectedRows.includes(rowIndex)) {
            setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
        } else {
            setSelectedRows([...selectedRows, rowIndex]);
        }
    };

    const handleSelectAll = () => {
        // Function to handle the selection/deselection of all rows.
        if (selectedRows.length === rows.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(
                rows.map((row: any) => {
                    return row.id;
                })
            );
        }
    };

    useEffect(() => {
        onRowSelect && onRowSelect(selectedRows);
    }, [onRowSelect, selectedRows]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setLoading(isLoading ?? false);
    }, [isLoading]);

    useEffect(() => {
        setSortColumn("");
        setSortDirection("asc");
        setCurrentPage(1);
    }, [searchQuery]);

    useEffect(() => {
        if (isRemote && typeof page == "number") {
            setCurrentPage(page);
        }
    }, [page, isRemote]);

    const renderHeaders = () => {
        return (
            <tr className="text-left py-2 bg-gray-100 dark:bg-darkmode-600 overflow-hidden no-select ">
                {hasSelect && (
                    <th key="checkbox" scope="col" className={"px-2 py-3 flex-1"}>
                        <input
                            type="checkbox"
                            className={twMerge(
                                "transition-all duration-100 ease-in-out shadow-sm border-slate-400 cursor-pointer rounded focus:ring-3 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20",
                                "[&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10"
                            )}
                            checked={selectedRows.length === rows.length}
                            onChange={handleSelectAll}
                        />
                    </th>
                )}
                {columns.map((column, index: number) => (
                    <th
                        key={column.name}
                        scope="col"
                        className={
                            twMerge([
                                "px-2 py-2 uppercase cursor-pointer flex-1",
                                index == 0 && "rounded-l-lg",
                                columns.length == index + 1 && "rounded-r-lg"
                            ])
                        }
                        onClick={() => toggleSorting(column.field)}
                    >
                        <div
                            className="flex hover:bg-slate-100 group transition duration-200 py-1 px-2 rounded-lg">
                            <span
                                className="text-slate-400 group-hover:text-slate-700 font-semibold text-[0.67rem]"> {column.name}

                            </span>

                            {sortColumn === column.field && (
                                <span>
                                    <Lucide
                                        icon={sortDirection === "asc" ? "ChevronUp" : "ChevronDown"}
                                        className="w-4 h-4 ml-1 text-slate-500"
                                    />

                                    </span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        );
    };

    const renderRows = () => {
        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = startIndex + recordsPerPage;


        const filteredRows = rows.filter((row: any) => {
            const searchableContent = Object.values(row).join(" ").toLowerCase();
            return searchableContent.includes(searchQuery.toLowerCase());
        });

        const sortedRows = [...filteredRows].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
            if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });

        return sortedRows
            .slice(startIndex, endIndex)
            .map((row: any, index: number) => (
                <tr
                    key={row.id}
                    // className={`${
                    //     index % 2 === 0
                    //         ? "bg-gray-50 dark:bg-darkmode-500"
                    //         : "bg-white dark:bg-darkmode-100"
                    // }  hover:bg-gray-100 border-b border-slate-100`}
                    className="border-b border-slate-100"
                    onClick={() => onRowClick && onRowClick(data ? data[index] : row)}
                >
                    {hasSelect && (
                        <td key={`checkbox-${row.id}`} className="px-2 py-4 text-xs">
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(row.id)}
                                onChange={() => handleRowSelection(row.id)}
                                className={twMerge(
                                    "transition-all duration-100 ease-in-out",
                                    "shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50",
                                    "[&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10"
                                )}
                            />
                        </td>
                    )}
                    {columns.map((column) => {
                        const cellContent = column.render
                            ? column.render(row)
                            : row[column.field];

                        return (
                            <td
                                key={column.field}
                                className="px-2 py-3 text-xs text-slate-500"
                            >
                                {column.type === "date"
                                    ? new Date(cellContent).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    })
                                    : cellContent}
                            </td>
                        );
                    })}
                </tr>
            ));
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const prev = () => {
        if (prevPage) {
            isRemote ? prevPage() : handlePrevPage();
        } else {
            handlePrevPage();
        }
    };

    const next = () => {
        if (nextPage) {
            isRemote ? nextPage() : handlePageChange(currentPage + 1);
        } else {
            handlePageChange(currentPage + 1);
        }
    };

    const renderPagination = () => {
        const pageNumbers: any[] = [];
        const rangeStart = Math.max(1, currentPage - 2);
        const rangeEnd = Math.min(totalPages, currentPage + 2);

        for (let i = rangeStart; i <= rangeEnd; i++) {
            pageNumbers.push(i);
        }

        if (rangeStart > 1) {
            if (pageNumbers.length > 0 && pageNumbers[0] === "...") {
                pageNumbers.splice(0, 1);
            }
            pageNumbers.unshift("...");
        }
        if (rangeEnd < totalPages) {
            pageNumbers.push("...");
        }

        return (
            <div className="border-y border-slate-100 w-full flex justify-between">
                <ul className="list-pagination-prev pagination pagination-tabs card-pagination">
                    <li className="page-item">
                        <button
                            className="page-link pr-4 py-4 border-r rounded-r-none"
                            onClick={() => {
                                prev();
                            }}
                        >
                            <Lucide icon="ChevronLeft" className="w-5 h-5 mr-1"/>
                            Prev
                        </button>
                    </li>
                </ul>
                <ul className="inline-flex items-center pb-2 m-0">
                    {pageNumbers.map((pageNumber) => (
                        <li key={`page-${pageNumber}`}>
                            <a
                                href="#"
                                onClick={() =>
                                    typeof pageNumber === "number"
                                        ? handlePageChange(pageNumber)
                                        : null
                                }
                                className={`px-3 py-1 rounded leading-tight  ${
                                    pageNumber === currentPage
                                        ? "bg-primary text-white"
                                        : "bg-white dark:bg-darkmode-700 text-gray-500 hover:bg-gray-100"
                                } mr-2 border border-transparent`}
                            >
                                {pageNumber}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="list-pagination-next pagination pagination-tabs card-pagination">
                    <li className="page-item rounded-l-none">
                        {currentPage < totalPages && (
                            <button
                                className="page-link pl-4 py-4 border-l rounded-l-none"
                                onClick={() => next()}
                            >
                                Next <Lucide icon="ChevronRight" className="w-5 h-5 ml-1"/>{" "}
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <div>
            <div className={`${flat ? "" : "box"} page-filler`}>
                <div className="flex items-center justify-between p-3">
                    {/*  The Left Part */}
                    <div className="mx-1 flex items-center">
                        <FormInput
                            type="text"
                            placeholder="Type to search ..."
                            className="min-h-[30px] xl:min-h-[36px] text-[0.684rem] xl:text-sm xl:min-w-[260px] shadow-sm border-slate-200"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />

                        {/* <div className="mx-2">
              <Button
                variant="outline-secondary"
                className="min-h-[38px] shadow-none"
              >
                <Lucide name="Filter" className="w-4 h-4" />
              </Button>
            </div> */}
                    </div>
                    {/*  End :: The Left Part */}

                    {/* The Right Part */}
                    <div className="mx-2 flex items-center">
                        <div className="flex items-center">
                            {/* <Button
                id="tabulator-print"
                variant="outline-secondary"
                className="w-1/2 mr-2 sm:w-auto text-xs min-h-[36px]"
                onClick={() => {}}
              >
                <Lucide name="Printer" className="w-4 h-4 mr-2" /> Print
              </Button> */}
                            <Menu className="w-1/2 sm:w-auto">
                                {!hideExportButton && <Menu.Button
                                    as={Button}
                                    variant="outline-secondary"
                                    className="border-slate-300 text-slate-500 w-full sm:w-auto text-xs min-w-[35px] min-h-[30px] xl:min-h-[36px]"
                                >
                                    <Lucide icon="FileText" className="w-3 h-4 xl:mr-2"/>
                                    <span className="hidden xl:inline-flex">Export</span>
                                    <Lucide
                                        icon="ChevronDown"
                                        className="w-4 h-4 ml-auto hidden xl:inline-block sm:ml-2"
                                    />
                                </Menu.Button>}
                                <Menu.Items className="w-40 text-xs text-slate-500">
                                    <Menu.Item
                                        onClick={() =>
                                            onExportCsv(
                                                rows,
                                                columns,
                                                `${title ?? "Data"}_${Date.now()}`
                                            )
                                        }
                                    >
                                        <Lucide icon="FileText" className="w-4 h-4 mr-2"/> Export
                                        CSV
                                    </Menu.Item>

                                    <Menu.Item
                                        onClick={() =>
                                            exportToXlsx(rows, `${title ?? "Data"}_${Date.now()}`)
                                        }
                                    >
                                        <Lucide icon="FileText" className="w-4 h-4 mr-2"/> Export
                                        XLSX
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                        {children}
                        {showCreateButton && (
                            <Button
                                variant={props.createButtonVariant ?? "primary"}
                                className="px-4 py-2 min-h-[30px] xl:min-h-[36px] text-[0.6542rem] xl:text-xs min-w-[60px] ml-2"
                                onClick={() => {
                                    props.onCreateButtonClick && props?.onCreateButtonClick();
                                }}
                            >
                                <Lucide icon={props.createButtonIcon ?? "Plus"} className="w-3 h-4 mr-2"/>
                                {props.createButtonLabel ?? "Create"}
                            </Button>
                        )}
                    </div>
                    {/* End :: The Right Part */}
                </div>
                {/* SEARCH BOX --- START */}
                <div>
                    <div className="row align-items-center hidden">
                        <div className="col">
                            <div
                                className="flex flex-row-reverse justify-center items-center input-group input-group-flush input-group-merge input-group-reverse">
                                <input
                                    className="px-4 py-4 w-full text-slate-400 placeholder:text-slate-400 focus:ring-0 focus:border-0 focus:outline-none shadow-none"
                                    type={"Search "}
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search"
                                />
                                <span className="input-group-text">
                  <Lucide
                      icon="Search"
                      className="w-4 h-4 text-slate-400 mx-4"
                  />
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SEARCH BOX --- END */}

                <div className={`overflow-x-auto px-4`}>
                    {/* TABLE --- START */}
                    <table className="w-full text-sm text-left h-full ">
                        {/* TABLE HEADER -- START */}
                        <thead className="truncate">{renderHeaders()}</thead>
                        {/* TABLE HEADER -- END */}

                        {/* TABLE BODY -- START */}
                        <tbody className="truncate pl-3">
                        {!loading && rows.length > 0 && renderRows()}
                        {!loading && rows.length === 0 && (
                            <tr>
                                <td className="text-center py-10" colSpan={columns.length}>
                                    <div
                                        className="m-auto items-center text-center p-5 mt-[40px] bg-rose-100/30 w-fit rounded-full">
                                        <EmptyIcon height={70} width={70}/>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-3 capitalize">
                                        No records found
                                    </p>
                                </td>
                            </tr>
                        )}
                        {loading && (
                            <tr>
                                <td className="text-center py-10" colSpan={columns.length}>
                                    <SpinnerIcon height={50} width={50}/>
                                </td>
                            </tr>
                        )}
                        </tbody>
                        {/* TABLE BODY -- END */}
                    </table>
                    {/* TABLE --- END */}
                </div>

                {rows.length > 0 && (
                    <div className="card-footer flex justify-between">
                        {showPagination &&
                            !loading &&
                            rows.length > 0 &&
                            renderPagination()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataTable;
