import { writable } from "svelte/store";
import { Day } from "../DateAPI";

export class CurrentDayView {
    public day: Day = new Day(0, "");
    public isVisible: boolean = false;
}

export const currentDayView = writable(new CurrentDayView());
