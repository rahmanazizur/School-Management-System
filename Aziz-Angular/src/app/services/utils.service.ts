// Convert date object to "MM/DD/YYYY" string
export function formatDateToMMDDYYYY(date: any) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
}

export function isNullOrEmpty(value:string) {
    return value == null || value == undefined || value == "";
}