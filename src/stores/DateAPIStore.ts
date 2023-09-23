import { writable } from "svelte/store";
import { retrieveMonthFromLocalStorage, retrieveYearFromLocalStorage } from "../LocalStorageAPI";

export const currentYear = writable(retrieveYearFromLocalStorage());
export const currentMonth = writable(retrieveMonthFromLocalStorage());
