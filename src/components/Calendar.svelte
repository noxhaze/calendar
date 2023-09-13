<script lang="ts">
    import { Month } from "../DateAPI";
    import Day from "./Day.svelte";

    let currentMonth: Month = Month.getMonthFromIndex(new Date().getMonth());
</script>

<div class="calendar-container">
    {#each currentMonth.days as day}
         <Day num={day.number} />
    {/each}
</div>

<style>
    .calendar-container {
        display: grid;
        padding: 1.5em;
        background-color: var(--tertiary-color);
        border-radius: 1em;
        width: 20em;
        height: 15em;

        gap: 0.5em;

        grid-template-rows: repeat(4, 2.5em);
        grid-template-columns: repeat(7, 2.5em);
    }
</style>
