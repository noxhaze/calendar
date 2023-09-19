import { Month } from "./DateAPI";

const KEY = "SVELTE_CALENDAR_MONTH_DATA";

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
