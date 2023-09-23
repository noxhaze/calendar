<script lang="ts">
    import DateDisplay from "./components/DateDisplay.svelte";
    import DayView from "./components/DayView.svelte";
    import Calendar from "./components/Calendar.svelte";
    import { currentDayView, CurrentDayView } from "./stores/DayViewStore";
    import { currentYear } from "./stores/DateAPIStore";
    import { Year } from "./DateAPI";
    import { saveYearToLocalStorage } from "./LocalStorageAPI";

    let dayView: CurrentDayView;
    let year: Year;

    currentDayView.subscribe((value) => dayView = value);
    currentYear.subscribe((val) => year = val);

    window.onbeforeunload = () => {
        saveYearToLocalStorage(year);
    };
</script>

<center>
    <main>
        <div class="title-area">
            <h1>Today on</h1>
            <DateDisplay />

            <div class="month-change-container">
                <button class="transparent-button alternate-transparent">-</button>
                <button class="transparent-button alternate-transparent">+</button>
            </div>
        </div>

        <div class="main-elements-container">
            {#if year !== undefined || year !== null}
                <Calendar />
            {/if}

            {#if dayView.isVisible}
                <DayView day={dayView.day} />
            {/if}
        </div>
    </main>
</center>

<style>
    .main-elements-container {
        display: flex;
        align-items: center;
    }

    .title-area {
        margin-bottom: 1em;
    }
</style>
