import { Month, Year } from "./DateAPI";

const KEY = "SVELTE_CALENDAR_MONTH_DATA";
const YEAR_KEY = "SVELTE_CALENDAR_YEAR_DATA";

export function saveMonthToLocalStorage(month: Month) {
    localStorage.setItem(KEY, JSON.stringify(month));
}

export function retrieveMonthFromLocalStorage(): Month {
    let data = "" + localStorage.getItem(KEY);
    if (localStorage.getItem(KEY) == "") {
        localStorage.setItem(KEY, JSON.stringify(Month.getMonthFromIndex(new Date().getMonth())));
    }

    return JSON.parse(data) as Month;
}


export function saveYearToLocalStorage(year: Year) {
    localStorage.setItem(YEAR_KEY, JSON.stringify(year));
}

export function retrieveYearFromLocalStorage(): Year {
    let data = "" + localStorage.getItem(YEAR_KEY);
    if (localStorage.getItem(YEAR_KEY) == "") {
        localStorage.setItem(YEAR_KEY, JSON.stringify(new Year(new Date().getFullYear())));
    }

    return JSON.parse(data) as Year;
}
