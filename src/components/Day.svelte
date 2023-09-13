<script lang="ts">
    import { currentDayView, CurrentDayView } from "../stores/DayViewStore"
    import { Day } from "../DateAPI";

    export let day: Day;

    function onClick() {
        let newCurrentDayView: CurrentDayView = new CurrentDayView();
        newCurrentDayView.day = day;
        newCurrentDayView.isVisible = true;
        currentDayView.set(newCurrentDayView);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={onClick} class="day-container">
    <p>{day.number}</p>
</div>

<style>
    .day-container {
        display: flex;
        background-color: var(--primary-color);
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        border-radius: 0.5em;
    }
</style>
