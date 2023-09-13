<script lang="ts">
    import DayView from "./DayView.svelte";
    import { Day } from "../DateAPI";

    export let day: Day;

    let isDayViewVisible: boolean = false;

    function onClick() {
        isDayViewVisible = !isDayViewVisible;    
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={onClick} class="day-container">
    <p>{day.number}</p>

    {#if isDayViewVisible} 
        <DayView day={day} />
    {/if}
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
