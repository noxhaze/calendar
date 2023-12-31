import { writable } from "svelte/store";
import { retrieveYearFromLocalStorage } from "../LocalStorageAPI";

export const currentYear = writable(retrieveYearFromLocalStorage());
export const currentMonthIndex = writable(new Date().getMonth());
