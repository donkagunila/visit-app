import {toast} from "react-toastify";
import * as XLSX from "xlsx";

const convertDataToString = (data: any[], columns: any[]) => {
    let stringData = "";

    // Add column headers
    const headers = columns.map((column) => column.name);
    stringData += headers.join("\t") + "\n"; // tab-separated, newline at the end

    // Add rows
    data.forEach((row) => {
        const rowValues = columns.map((column) => row[column.field]);
        stringData += rowValues.join("\t") + "\n"; // tab-separated
    });

    return stringData;
};

const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success("Data copied to clipboard!");
    } catch (err) {
        toast.error("Error Copying to Clipboard, Please try again!");
        console.error("Failed to copy: ", err);
    }
};

const createPrintContent = (data: any[], columns: any[]) => {
    let printContent = "<table>";

    // Add headers
    printContent += "<tr>";
    columns.forEach((column) => {
        printContent += `<th>${column.name}</th>`;
    });
    printContent += "</tr>";

    // Add rows
    data.forEach((row) => {
        printContent += "<tr>";
        columns.forEach((column) => {
            printContent += `<td>${row[column.field]}</td>`;
        });
        printContent += "</tr>";
    });

    printContent += "</table>";
    return printContent;
};

export const handleCopyClick = (rows: any[], columns: any[]) => {
    const stringData = convertDataToString(rows, columns);
    void copyToClipboard(stringData);
};

export const onPrint = (rows: any[], columns: any[]) => {
    const printContent = createPrintContent(rows, columns);
    const printWindow = window.open("", "_blank");

    if (printWindow) {
        printWindow.document.write(printContent);
        printWindow.document.close(); // Necessary for some browsers
        printWindow.focus();

        // Wait for the content to render and then call print
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250); // Adjust timeout as needed for rendering
    } else {
        alert(
            "Unable to open print window. Please disable popup blockers and try again.",
        );
    }
};

export const onExportCsv = (
    csvData: any[],
    columns: any[],
    fileName: string,
) => {
    const csvRows = [];
    const headers = columns.map((column) => column.name);
    csvRows.push(headers.join(","));
    for (const row of csvData) {
        const values = columns.map((column) => {
            const escaped = ("" + row[column.field]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
    }
    const blob = new Blob([csvRows.join("\n")], {type: "text/csv"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${fileName}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const exportToXlsx = (xlsxData: any[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(xlsxData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
