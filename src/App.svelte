<script lang="ts">
    import DateDisplay from "./components/DateDisplay.svelte";
    import DayView from "./components/DayView.svelte";
    import Calendar from "./components/Calendar.svelte";
    import { currentDayView, CurrentDayView } from "./stores/DayViewStore";

    let dayView: CurrentDayView;

    currentDayView.subscribe((value) => dayView = value);
</script>

<center>
    <main>
        <div class="title-area">
            <h1>Today on,</h1>
            <DateDisplay />
        </div>

        <div class="main-elements-container">
            <Calendar />

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
</style>
