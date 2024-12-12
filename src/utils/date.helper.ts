export function formatReadableDate(dateInput: string | number): string {
    try {
        const date = new Date(dateInput);
        checkIfDateIsValid(dateInput);
        const formatter = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
        return formatter.format(date);
    } catch (error: any) {
        console.error(error.message);
        return "-";
    }
}


export function formatShortReadableDate(dateInput: string | number): string {
    try {
        const date = new Date(dateInput);
        checkIfDateIsValid(dateInput);
        const formatter = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            month: "short",
            day: "2-digit",
        });
        return formatter.format(date);
    } catch (error: any) {
        console.error(error.message);
        return "-";
    }
}


function checkIfDateIsValid(date: string | number): boolean {
    return !isNaN(new Date(date).getTime());
}