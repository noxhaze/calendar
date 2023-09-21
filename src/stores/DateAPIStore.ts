import { writable } from "svelte/store";
import { Year } from "../DateAPI";

export const currentDayView = writable(new Year(new Date().getFullYear()));
