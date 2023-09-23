import { Year } from "./DateAPI";

const YEAR_KEY = "SVELTE_CALENDAR_YEAR_DATA";

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
