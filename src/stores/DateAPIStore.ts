import { writable } from "svelte/store";
import { Year } from "../DateAPI";

export const currentYear = writable(new Year(new Date().getFullYear()));
